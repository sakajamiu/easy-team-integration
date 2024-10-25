import onboarding1 from '@/assets/images/onboarding1.png';
import onboarding2 from '@/assets/images/onboarding2.png';
import onboarding3 from '@/assets/images/onboarding3.png';
import email from '@/assets/icons/email.png';
import home from '@/assets/icons/home.png';
import list from '@/assets/icons/list.png';
import lock from '@/assets/icons/lock.png';
import google from '@/assets/icons/google.png';
import setting from '@/assets/icons/settings.png';
import form from '@/assets/icons/form.png';
import signUp from '@/assets/images/signup.jpg';
import person from '@/assets/icons/person.png';
import check from '@/assets/images/check.png';
import out from '@/assets/icons/out.png';
import employee from '@/assets/icons/employee.png';

export const icons = {
  email,
  home,
  list,
  google,
  lock,
  setting,
  form,
  person,
  out,
  employee,
};

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  signUp,
  check,
};

export const onboarding = [
  {
    id: 1,
    title: 'Work smarter not harder!',
    description: "Easily manage your staff with EasyTeam's tracking, schedulling, and payroll.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: 'Easy to use, simple to setup',
    description: 'Manage staff permissions, multi-location support, and in-store access',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: 'Intergated time clock',
    description: 'Easy to access, stay connected and ready for payroll',
    image: images.onboarding3,
  },
];

export const data = {
  onboarding,
};
