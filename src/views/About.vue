<template>
  <div class="about">
    <section>
      <!-- <div class="intro">
        <div>
          <img src="@/assets/logo.png" alt="">
        </div>
        <p class="w-50">身為愛吃美食愛出去玩的上班族，從小到大去過的地方數不勝數，但俗話說"好記性不如爛筆頭"，為了好好記得這些美好回憶，要好好地記錄下來。</p>
      </div> -->
      <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 20rem;" class="mb-2">
        <b-card-text>
          身為愛吃美食愛出去玩的上班族，從小到大去過的地方數不勝數，但俗話說"好記性不如爛筆頭"，為了好好記得這些美好回憶，要好好地記錄下來。
        </b-card-text>
      </b-card>
    </section>
  </div>
</template>

<style lang="scss">
  .about {
    // height: 300px;
    background-image: url(..//assets/155805.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center 60%;

    .intro {
      width: 70%;
      margin: 10% 15% 0 15%;
      padding: 5% 0;
      background-color: #ffffff;
      display: inline-flex;
      border-radius: 30px;
      box-shadow: 1px 1px 3px #3e3e3e;
      justify-content: center;
      align-items: center;

      div {
        width: 20%;
        margin: 1%;
      }

    }
  }
</style>