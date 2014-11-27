AdminConfig = { 
adminEmails: ['j@k.com'], 
collections: 
{ 
  Guests: {}, 
} 
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    Guests.add();

  });
};
  

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
