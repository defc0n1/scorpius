Template.scorpiusMaterializeLayout.onRendered(function() {
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js');
});

Template.scorpiusMaterializeOutAdminLayout.onRendered(function scorpiusMaterializeOutAdminLayout() {
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js');
});

Template.scorpiusMaterializeHeaderContainer.onRendered(function() {
		$('#sidenav-overlay').click();
		$('.button-collapse').sideNav();
		$('.dropdown-button').dropdown({
				constrain_width: false,
		});
});

Template.scorpiusMaterializeHeaderContainer.events({
		'click .logout': function() {
				Meteor.logout();
		},
});

Template.scorpiusMaterializeTabs.onRendered(function() {
		this.$('ul.tabs').tabs();
});

Template.scorpiusMaterializeTabs.helpers({
		items: function() {
				return this;
		},
});

Template.scorpiusMaterializeTabs.events({
		'click a': function() {
				this.onClick();
		},
});