<template>
  <div class="root" style="margin-top: 20px">
      <div class="content">
        <ons-list>
          <ons-list-header>Latest badges earned</ons-list-header>
          <ons-row class="stat-row">
            <ons-col v-for="badge in badges" :key="badge.id" class="stat-block stat-total-points">
              <img class="badge-img" :src="'img/badges/' + badge.img_path " alt="">
            </ons-col>
          </ons-row>
        </ons-list>
      </div>
  </div>
</template>


<script>
export default {

  mounted() {

  },

  props: ['badges'],

  data() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

  .stat-row {
    align-items: center;
    text-align: center;
  }

  .stat-block {
    max-width: 33%;
    padding: 10px;
  }

  .badge-img {
    width: 50%;
    height: auto;
    margin: 0 auto;
  }

</style>
