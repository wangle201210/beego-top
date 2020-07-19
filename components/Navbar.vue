<template>
  <div>
    <el-header class="pc">
      <el-row>
        <el-col class="nav-container" :span="2">
          <img class="logo" src="https://beego.me/static/img/beego_purple.png" alt="">
        </el-col>
        <el-col class="nav-container" :offset="2" :span="8">
          <el-menu
            :default-active="activeItem"
            background-color="#fff"
            text-color="#333"
            active-text-color="#409EFF"
            mode="horizontal">
            <el-menu-item class="nav-item" index="0">
              <p @click="to('/', '0')" class="link">{{ $t('nav.home') }}</p>
            </el-menu-item>
            <el-menu-item class="nav-item" index="1">
              <p @click="to('/docs', '1')" class="link">{{ $t('nav.docs') }}</p>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="nav-container" :offset="8" :span="4">
          <el-row>
            <el-button class="login" type="text">{{ $t('nav.login') }}</el-button>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{ locales.name }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :command="locale.code">
                  <nuxt-link class="dropdown-item" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-header class="header h5">
      <div class="inner-h5">
        <div class="fix" style="background-color:#000000;">
          <div class="img">
            <a href="https://yunqi.aliyun.com/" target="_blank">Geek 大会</a>
          </div>
          <div @click="showItemsFuc" class="right" :class="{ show: showItems, hide: !showItems }"></div>
          <div class="arr" :class="{ show: !showItems, hide: showItems }">
            <ul class="list">
              <li>
                <p
                  @click="to('/', '0')"
                  class="fr-child"
                  :class="{ activeItem: activeItem == '0' ? true : false }"
                  to="/"
                >首页</p>
                <div class="second"></div>
              </li>
              <li>
                <p
                @click="to('/docs', '1')"
                  class="fr-child"
                  :class="{ activeItem: activeItem == '1' ? true : false }"
                  to="/docs"
                >议程</p>
                <div class="second"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "0",
      showItems: false,
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    locales () {
      const result = this.$i18n.locales.filter(i => i.code == this.$i18n.locale)
      return result[0]
    }
  },
  methods: {
    to(path, activeIndex) {
      this.$router.push(`${this.$i18n.locale}/${path}`)
      this.activeItem = activeIndex
      this.showItems = !this.showItems
    },
    showItemsFuc() {
      this.showItems = !this.showItems;
    },
    handleCommand(command) {
      if (command == 'ch') {
        this.i18n = "中文"
      } else if (command == 'en') {
        this.i18n = 'English'
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 501px) {
  .inner-h5,
  .h5 {
    display: none;
  }
  .el-header,
  .el-footer {
    color: white;
    text-align: center;
    font-size: 16px;
  }

  .pc {
    z-index: 20;
  }

  .el-header {
    position: fixed;
    background-color: white;
    width: 100%;
    -moz-box-shadow: 0px 3px 4px #E0E0E0;
    -webkit-box-shadow: 0px 3px 4px #E0E0E0;
    box-shadow: 0px 3px 4px #E0E0E0;
  }

  .nav-container {
    line-height: 60px;
  }

  .logo {
    vertical-align: middle;
    width: 100%;
  }

  .nav {
    width: 100%;
    border: none;
  }

  .nav-item {
    text-align: center;
    width: 20%;
    font-size: 16px;
  }

  .nav-item:hover {
    background-color: whitesmoke !important;
  }

  .nav-item:focus {
    background-color: whitesmoke !important;
  }

  .login {
    margin-right: 30px;
  }

  .dropdown-item {
    color: #333;
    text-decoration: none;
  }
}

@media screen and (max-width: 500px) {
  .body {
    padding: 0px !important;
  }

  .inner-pc,
  .pc {
    display: none;
  }

  .el-header {
    padding: 0px !important;
    height: 38px !important;
  }
  .inner-h5 .fix {
    position: fixed;
    z-index: 10;
    height: 40px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .inner-h5 .fix {
    z-index: 1000;
  }
  .inner-h5 .fix .img {
    height: 100%;
    overflow: hidden;
    float: left;
    padding-left: 10px;
    display: table;
  }
  .inner-h5 .fix .img a {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    font-size: 18px;
  }
  .inner-h5 .fix .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
  }
  .fix .right.show {
    background-image: url(https://gw.alicdn.com/tfs/TB1tmbKbx9YBuNjy0FfXXXIsVXa-40-38.png);
    background-repeat: no-repeat;
    background-size: 20px 19px;
    background-position: 50%;
  }

  .inner-h5 .fix .right.hide {
    background-image: url(https://gw.alicdn.com/tfs/TB11UVvbTtYBeNjy1XdXXXXyVXa-32-32.png);
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: 50%;
  }

  .inner-h5 .fix .arr.show {
    display: block;
  }

  .inner-h5 .fix .arr.hide {
    display: none;
  }

  .inner-h5 .fix .arr {
    top: 40px;
  }

  .inner-h5 .fix .arr {
    display: none;
    position: fixed;
    z-index: 10;
    top: 40px;
    bottom: 0;
    left: 0;
    background-color: #000;
    right: 0;
  }

  .inner-h5 .fix .arr .list {
    position: relative;
    height: 100%;
    overflow: auto;
  }

  .inner-h5 .fix .arr .list li {
    padding: 0 20px;
  }

  .inner-h5 .fix .arr .list li .fr-child {
    display: block;
    padding: 10px 0;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    color: white;
  }

  .inner-h5 .fix .arr .list li .fr-child.active {
    color: #409eff;
  }
}
</style>