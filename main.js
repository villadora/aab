/** 
  * Setup Data Model Repository
  */
Logins = new Meteor.Collection("logins");     // users collection stores user profiles
Records = new Meteor.Collection("records"); // records collection stores balance records


if (Meteor.isClient) {
  Template.header.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  
  });
}
