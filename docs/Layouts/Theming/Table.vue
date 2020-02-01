<template lang="html">
  <div>
    <div class="ui two column relaxed grid">
      <div class="column">
        <table is="sui-table" text-align="right">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui right aligned celled table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td is="sui-table-cell" text-align="left">Drema</td>
              <td is="sui-table-cell" positive>15</td>
              <td is="sui-table-cell" negative>26g</td>
              <td is="sui-table-cell" warning>8g</td>
            </tr>
            <tr is="sui-table-row" positive>
              <td is="sui-table-cell" text-align="left">Nona</td>
              <td>11</td>
              <td>21g</td>
              <td>16g</td>
            </tr>
            <tr is="sui-table-row" negative>
              <td is="sui-table-cell" text-align="left">Isidra</td>
              <td>34</td>
              <td>43g</td>
              <td>11g</td>
            </tr>
            <tr is="sui-table-row" warning>
              <td is="sui-table-cell" text-align="left">Bart</td>
              <td>41</td>
              <td>40g</td>
              <td>30g</td>
            </tr>
            <tr is="sui-table-row" selected>
              <td is="sui-table-cell" text-align="left">Nguyet</td>
              <td>41</td>
              <td>44g</td>
              <td>28g</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui basic right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui very basic right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui celled selectable right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui striped right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui padded celled right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui definition celled right aligned table">
          <thead>
            <tr>
              <th></th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui inverted right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="ui inverted blue selectable celled right aligned table">
          <thead>
            <tr>
              <th is="sui-table-header-cell" text-align="left">
                Person
              </th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row.person">
              <td is="sui-table-cell" text-align="left">{{ row.person }}</td>
              <td>{{ row.calories }}</td>
              <td>{{ row.fat }}</td>
              <td>{{ row.protein }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="clear: both; display: block;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          person: 'Drema',
          calories: '15',
          fat: '26g',
          protein: '8g',
        },
        {
          person: 'Nona',
          calories: '11',
          fat: '21g',
          protein: '16g',
        },
        {
          person: 'Isidra',
          calories: '34',
          fat: '43g',
          protein: '11g',
        },
        {
          person: 'Bart',
          calories: '41',
          fat: '40g',
          protein: '30g',
        },
        {
          person: 'Nguyet',
          calories: '41',
          fat: '44g',
          protein: '28g',
        },
      ],
    };
  },
};
</script>

<style lang="css"></style>
