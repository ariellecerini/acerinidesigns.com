<template>
    <navbar position="fixed"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
                <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
                <img style="width:100%; max-width: 160px; padding-top: 0 !important;" src="/Asset_3.png">
                </nuxt-link>
                <el-popover
                        ref="popover1"
                        popper-class="popover"
                        placement="bottom"
                        width="300"
                        trigger="hover">
                    <div class="popover-body"><b>Arielle Cerini:</b> <br/>Designer, Coder, & Critical Creative Practitioner</div>
                </el-popover>
        </template>
        <template slot="navbar-menu">
            <drop-down tag="li" title="Portfolio" icon="now-ui-icons design_image" class="nav-item">
              <nav-link to="/portfolio/design-research">
                <i class="now-ui-icons education_paper"></i>Design Research
              </nav-link>
                <nav-link to="/portfolio/web-design">
                    <i class="now-ui-icons design_bullet-list-67"></i>Website Design
                </nav-link>
            </drop-down>
            <drop-down tag="li" title="Web Apps" icon="now-ui-icons ui-2_settings-90" class="nav-item">
                <nav-link to="http://coloralchemy.acerinidesigns.com/">
                    <i class="now-ui-icons shopping_box"></i> Color Alchemy
                </nav-link>
                <nav-link to="https://digitalpenmanship.app">
                    <i class="now-ui-icons ui-2_settings-90"></i>Digital Penmanship
                </nav-link>
            </drop-down>

            <drop-down tag="li" title="Contact Details" icon="now-ui-icons design_image" class="nav-item">
                <nav-link to="mailto:arielle@acerinidesigns.com">
                    <i class="now-ui-icons tech_mobile"></i> Arielle@acerinidesigns.com
                </nav-link>
                <a href="http://acerinidesigns.com/Arielle_Cerini.pdf" target="_blank" style="margin-bottom: 0;" class=" dropdown-item media d-flex align-items-center">
                    <i class="now-ui-icons education_paper"></i>Resume
                </a>
                <a href="http://acerinidesigns.com/Arielle_Cerini_cv.pdf" target="_blank" style="margin-bottom: 0;"  class=" dropdown-item media d-flex align-items-center">
                    <i class="now-ui-icons education_paper"></i> CV
                </a>
                
            </drop-down>
            
        </template>
    </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>
.navbar.navbar-transparent{
    background-color: #ff9195 !important;
}
</style>
