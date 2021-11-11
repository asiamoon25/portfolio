<template>
 <v-app>
    <default-body></default-body>
</v-app>
</template>

<script>

import DefaultBody from "./components/default/layouts/DefaultBody";
export default {
  name: 'App',
  components: {DefaultBody},
  data: () => ({
    //
  }),
};
</script>
