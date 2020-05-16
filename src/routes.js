import Home from './pages/Home.svelte';
import NotFound from './pages/NotFound.svelte';
import TestPage from './pages/TestPage.svelte';

const routes = {
  '/': Home,
  '/about': TestPage,
  '/features': TestPage,
  '*': NotFound
}

export { routes }