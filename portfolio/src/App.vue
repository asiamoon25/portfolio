<template>
 <v-app>
   <default-header/>

    <default-body></default-body>

</v-app>
</template>

<script>

import DefaultBody from "./components/default/layouts/DefaultBody";
import DefaultHeader from "./components/default/layouts/DefaultHeader";
export default {
  name: 'App',
  components: {DefaultHeader, DefaultBody},
  data: () => ({
    //
  }),
};
</script>
