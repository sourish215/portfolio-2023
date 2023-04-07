import { PublicObjectSearchRequest, SimplePublicObject } from '@hubspot/api-client/lib/codegen/crm/contacts';
import { useHubspot } from '~~/composables/hubspot';

export default defineEventHandler(async (event) => {
  const { hubspotClient } = useHubspot();

  const body = await readBody(event);

  const filter = { propertyName: 'email', operator: 'EQ', value: body.email };
  const filterGroup = { filters: [filter] };

  const publicObjectSearchRequest = {
    filterGroups: [filterGroup],
  } as PublicObjectSearchRequest;

  const search = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);

  if (!search.results.length) {
    const contactObject = await createContactObject();

    return contactObject;
  } else {
    const existingUser = search.results[0];

    const updatedUser = await updateContactObject(existingUser);

    return updatedUser;
  }

  async function createContactObject() {
    const properties = {
      ...body,
    };

    const SimplePublicObjectInput = { properties };

    let contactObject = {} as SimplePublicObject;

    try {
      contactObject = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);

      setCookie(event, 'userId', contactObject.id);
    } catch (e: any) {
      console.log('error', e);
    } finally {
      return contactObject;
    }
  }

  async function updateContactObject(user: SimplePublicObject) {
    const properties = {
      ...body,
    };

    const SimplePublicObjectInput = { properties };

    try {
      return await hubspotClient.crm.contacts.basicApi.update(user.id, SimplePublicObjectInput);
    } catch (e) {
      console.log(e);
    }
  }
});
