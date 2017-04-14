import Ember from 'ember';

const { computed, Controller } = Ember;

export default Controller.extend({
  sharedPlaces: { indy: 'Indianapolis', raleigh: 'Raleigh' },
  myPlaces: computed('sharedPlaces', function () {
    const shared = this.get('sharedPlaces');
    return { dubai: 'Dubai', london: 'London', ...shared };
  }),
  yourPlaces: computed('sharedPlaces', function () {
    const places = this.get('sharedPlaces');
    return { dalyCity: 'Daly City', ...places };
  })
});
