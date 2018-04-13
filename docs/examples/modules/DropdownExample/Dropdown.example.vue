<script>
/* eslint-disable */
</script>
<template>
	<div>
		<h1>Dropdown bug</h1>

		<sui-dropdown
		  selection
			v-model="value1"
			:options="getData2()"
		/>
    value1: {{value1}}
    <br>

		<sui-dropdown
		  selection
			v-model="value2"
			:options="getData2()"
		/>
    value2: {{value2}}
    <br>
		<sui-dropdown
		  selection
			v-model="value3"
			:options="getData2()"
		/>
    value3: {{value3}}
	</div>
</template>

<script>
const a = [
        {
          value: 0,
          text: "item1"
        },
        {
          value: 1,
          text: "item2"
        }
      ];

export default {
  methods: {
    getData() {
      return [
        {
          value: 0,
          text: "item1"
        },
        {
          value: 1,
          text: "item2"
        }
      ];
    },
    getData2() {
      return [...a];
    }
  },
  data() {
    return {
      value1: 0,
      value2: 1,
      value3: 0,
      dataCollection: [
        {
          value: 0,
          text: "item1"
        },
        {
          value: 1,
          text: "item2"
        }
      ]
    };
  }
};
</script>
