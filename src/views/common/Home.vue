<template>
  <div class="container">
    <header>
      <h1>数据可视化</h1>
    </header>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <p>柱形图</p>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <p>折线图</p>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <p>扇形图</p>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>12345</li>
              <li>12345</li>
            </ul>
          </div>
          <div class="no-bd"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar">
          <p>柱形图</p>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <p>折线图</p>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <p>扇形图</p>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
      }
    },
  }
</script>

<style scoped lang="less">

header{
  height: 60px;
  h1{
    color: #fff;
    text-align: center;
  }
}
.container {
  @val:17px;
  width: calc(~"100% + @{val}");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow-y: scroll;
}
.mainbox {
  color: #fff;
  display: flex;
  min-width: 500px;
  height: auto;
  margin: 0 auto;
  padding: 10px 10px 0;
  .column{
    flex: 3;
    .panel {
      position: relative;
      height: 250px;
      padding: 0 10px 30px;
      border: 1px solid rgba(70, 68, 68, 0.26);
      margin-bottom: 15px;
      background:rgba(255, 255, 255, 0.089);
      &::before {
        position:absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
      }
      &::after {
        position:absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
      }
      .panel-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        &::before {
        position:absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
        content: "";
        }
        &::after {
          position:absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-bottom: 2px solid #02a6b5;
          content: "";
        }
      }
      p {
        height: 30px;
        color: #fff;
        line-height: 30px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
      }
      .chart {
        height: 210px;
        background-color: bisque;
      }
    }
  }
  .column:nth-child(2) {
    margin: 10px 5px;
    flex: 5;
  }
  
}
.no {
  height: 100px;
  background:rgba(255, 255, 255, 0.089);
  padding: 10px;
  &-hd {
    position: relative;
    border: 1px solid rgba(156, 155, 155, 0.315);
    &::before {
      position: absolute;
      height: 10px;
      width: 30px;
      top: 0;
      left: 0;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
      content: "";
    }
    &::after {
      position: absolute;
      height: 10px;
      width: 30px;
      bottom: 0;
      right: 0;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      content: "";
    }
    ul {
      display: flex;
      li {
        flex: 1;
        line-height: 70px;
        font-size: 60px;
        color: rgb(255, 232, 24);
        text-align: center;
        font-family: 'electronicFont';
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 25%;
          right: 0;
          height: 50%;
          width: 1px;
          background-color: rgba(206, 206, 206, 0.336)
        }
      }
    }
  }
}
</style>