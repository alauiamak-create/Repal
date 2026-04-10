export type Language = 'de' | 'en' | 'ar' | 'tr';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta_visit: string;
    cta_menu: string;
  };
  nav: {
    menu: string;
    location: string;
    about: string;
  };
  experience: {
    title: string;
    fresh: { title: string; desc: string };
    fast: { title: string; desc: string };
    big: { title: string; desc: string };
  };
  location: {
    title: string;
    address: string;
    hours: string;
    phone: string;
    get_directions: string;
  };
  footer: {
    visit_today: string;
    rights: string;
  };
}
