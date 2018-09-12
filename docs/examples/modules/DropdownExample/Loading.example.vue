<template lang="html">
  <sui-dropdown
    :options="countries"
    placeholder="State"
    search
    selection
    loading
    v-model="current"
  />
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      countries: [
        { key: 'AL', value: 'AL', text: 'Alabama' },
        { key: 'AK', value: 'AK', text: 'Alaska' },
        { key: 'AZ', value: 'AZ', text: 'Arizona' },
        { key: 'AR', value: 'AR', text: 'Arkansas' },
        { key: 'CA', value: 'CA', text: 'California' },
        { key: 'CO', value: 'CO', text: 'Colorado' },
        { key: 'CT', value: 'CT', text: 'Connecticut' },
        { key: 'DE', value: 'DE', text: 'Delaware' },
        { key: 'DC', value: 'DC', text: 'District Of Columbia' },
        { key: 'FL', value: 'FL', text: 'Florida' },
        { key: 'GA', value: 'GA', text: 'Georgia' },
        { key: 'HI', value: 'HI', text: 'Hawaii' },
        { key: 'ID', value: 'ID', text: 'Idaho' },
        { key: 'IL', value: 'IL', text: 'Illinois' },
        { key: 'IN', value: 'IN', text: 'Indiana' },
        { key: 'IA', value: 'IA', text: 'Iowa' },
        { key: 'KS', value: 'KS', text: 'Kansas' },
        { key: 'KY', value: 'KY', text: 'Kentucky' },
        { key: 'LA', value: 'LA', text: 'Louisiana' },
        { key: 'ME', value: 'ME', text: 'Maine' },
        { key: 'MD', value: 'MD', text: 'Maryland' },
        { key: 'MA', value: 'MA', text: 'Massachusetts' },
        { key: 'MI', value: 'MI', text: 'Michigan' },
        { key: 'MN', value: 'MN', text: 'Minnesota' },
        { key: 'MS', value: 'MS', text: 'Mississippi' },
        { key: 'MO', value: 'MO', text: 'Missouri' },
        { key: 'MT', value: 'MT', text: 'Montana' },
        { key: 'NE', value: 'NE', text: 'Nebraska' },
        { key: 'NV', value: 'NV', text: 'Nevada' },
        { key: 'NH', value: 'NH', text: 'New Hampshire' },
        { key: 'NJ', value: 'NJ', text: 'New Jersey' },
        { key: 'NM', value: 'NM', text: 'New Mexico' },
        { key: 'NY', value: 'NY', text: 'New York' },
        { key: 'NC', value: 'NC', text: 'North Carolina' },
        { key: 'ND', value: 'ND', text: 'North Dakota' },
        { key: 'OH', value: 'OH', text: 'Ohio' },
        { key: 'OK', value: 'OK', text: 'Oklahoma' },
        { key: 'OR', value: 'OR', text: 'Oregon' },
        { key: 'PA', value: 'PA', text: 'Pennsylvania' },
        { key: 'RI', value: 'RI', text: 'Rhode Island' },
        { key: 'SC', value: 'SC', text: 'South Carolina' },
        { key: 'SD', value: 'SD', text: 'South Dakota' },
        { key: 'TN', value: 'TN', text: 'Tennessee' },
        { key: 'TX', value: 'TX', text: 'Texas' },
        { key: 'UT', value: 'UT', text: 'Utah' },
        { key: 'VT', value: 'VT', text: 'Vermont' },
        { key: 'VA', value: 'VA', text: 'Virginia' },
        { key: 'WA', value: 'WA', text: 'Washington' },
        { key: 'WV', value: 'WV', text: 'West Virginia' },
        { key: 'WI', value: 'WI', text: 'Wisconsin' },
        { key: 'WY', value: 'WY', text: 'Wyoming' },
      ],
      current: null,
    };
  },
};
</script>
