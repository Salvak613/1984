const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const apiRoutes = {
  INFOS: `${apiUrl}/api/infos`,
  DYNASTIE1984: `${apiUrl}/api/dynastie1984`,
};

const appRoutes = {
  INFOS: `${appUrl}/infos`,
  INFOS_ID: (id: number) => `${appUrl}/infos/${id}`,
  INFOS_ADD: `${appUrl}/infos/ajouter-info`,
  INFOS_EDIT: (id: number) => `${appUrl}/infos/${id}/editer-info`,
  DYNASTIE1984: `${appUrl}/dynastie1984`,
  DYNASTIE1984_ID: (id: number) => `${appUrl}/dynastie1984/${id}`,
  DYNASTIE1984_ADD: `${appUrl}/dynastie1984/ajouter-info`,
  DYNASTIE1984_EDIT: (id: number) => `${appUrl}/dynastie1984/${id}/editer-info`,
};

export { apiRoutes, appRoutes };
