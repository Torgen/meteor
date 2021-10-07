/**
 * @summary Options to customize emails sent from the Accounts system.
 * @locus Server
 * @importFromPackage accounts-base
 */
Accounts.emailTemplates = {
  ...(Accounts.emailTemplates || {}),
  sendLoginToken: {
    subject: () => `Your login token on ${Accounts.emailTemplates.siteName}`,
    text: (user, url, { sequence }) => {
      return `Hello!

Type the following token in our login webpage to be logged in:
${sequence}
If you want, you can click the following link to be automatically logged in:
${url}

Thanks.
`;
    },
    html: (user, url, { sequence }) => {
      return `Hello!<br/>

Type the following token in our login webpage to be logged in:<br/><br/>
${sequence}<br/><br/>
If you want, you can click the following link to be automatically logged in:<br/><br/>
${url}<br/>

Thanks.
`;
    },
  },
};
