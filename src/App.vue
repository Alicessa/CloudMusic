<template>
  <div id="app">
 <top/>
 <leftnav/>
  </div>
</template>

<script>

import Top from 'components/Top'
import leftnav from 'components/leftnav'
export default {
  name: 'App',
  components: {
    Top,
    leftnav

  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  font-family: "PingHei","Helvetica Neue","Helvetica","Arial","Verdana","sans-serif";

}
</style>
