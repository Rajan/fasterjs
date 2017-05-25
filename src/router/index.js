import Vue from 'vue'
import Router from 'vue-router'

// Import Components
import Header from '@/components/root/Header'
import Logo from '@/components/modules/Logo'
import Dropdown from '@/components/modules/Dropdown'
import DropdownArrow from '@/components/modules/DropdownArrow'
import SearchInput from '@/components/modules/SearchInput'
import BudgetList from '@/components/modules/BudgetList'
import CreateBudget from '@/components/modules/CreateBudget'
import ClientList from '@/components/modules/ClientList'

// Import Page Components
// import Home from '@/components/Home'
import Login from '@/components/Login'
import Budget from '@/components/Budget'
import CurrentBudget from '@/components/CurrentBudget'
import Clients from '@/components/Clients'

Vue.use(Router)

// Define components
// Layouts
Vue.component('layout-header', Header)
Vue.component('layout-budget-list', BudgetList)
Vue.component('layout-client-list', ClientList)

// Modules
Vue.component('md-logo', Logo)
Vue.component('md-dropdown-nav', Dropdown)
Vue.component('md-dropdown-arrow', DropdownArrow)
Vue.component('md-search-input', SearchInput)
Vue.component('md-create-new-budget-item', CreateBudget)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/new/budget',
      name: 'Budget',
      component: Budget
    },
    {
      path: '/edit/:client/:budget',
      name: 'CurrentBudget',
      component: CurrentBudget
    }
  ]
})
