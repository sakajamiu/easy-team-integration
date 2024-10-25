<div align="center">
<h3 align="center"> Easy Team Assessment</h3>
 <div align="center">
    This Project take advantage of the latest <a href="https://docs.expo.dev/router/introduction/" target="_blank">expo router feature</a>. it's a full stack application connecting to <a href="htpps://neon.tech/" target="_blank" >neon database</a> and <a href="https://clerk.com" target="_blank">clerk </a> for authentication and <a href="https://www.easyteam.com/" target="_blank">easy team  mobile sdk </a>    </div>
</div>

## <a name="tech-stack">⚙️ Tech Stack</a>
- React Native
- Expo
- PostgreSQL
- Clerk
- Tailwind CSS

## <a name="features">🔋 Features</a>
👉 **Onboarding Flow**: Seamless user registration and setup process.

👉 **Email Password Authentication with Verification**: Secure login with email verification.

👉 **Authorization**: Secure access control for different user roles.

👉 **Clock View**: User clock-in, clock-out and take break.

👉 **Time Sheet**: Time Sheet view and mannagement.

👉 **Setting**: Set and Update Tracking Settings, break epriod, paid and unpaid break.

👉 **Employee List view**: Employee list view.

👉 **Shift Form View**: Shift form view.

👉 **Responsive on Android and iOS**: Optimized for both Android and iOS devices.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/sakajamiu/easy-team-integration.git
cd easy-team-integration
```

**Installation**
before installation get a .npmrc file that will allow access to easy-team sdk
Install the project dependencies using npm:


```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

EXPO_PUBLIC_EASY_TEAM_URL=
DATABASE_URL=

EXPO_PUBLIC_SERVER_URL=https://easy-team-assessment.com/


EXPO_PUBLIC_NPMRC=

```

Replace the placeholder values with your actual Clerk,  NeonDB,   credentials. You can
obtain these credentials by signing up on
the [Clerk](https://clerk.com/),  [NeonDB](https://neon.tech/), 
and [EasyTeam](https://www.easyteam.com/) websites respectively.

**Running the Project**

```bash
npx expo start
```

Download the [Expo Go](https://expo.dev/go) app and Scan the QR code on your respective device to view the project. Please note the Database Table need to match the project Table to work seemlessly. the project also has some env variables that is deliberately kept on the server. Please reach out for questions and help [Jamiu Saka](mailto:jamiusaka.a@gmail.com?subject=[GitHub]%20Easy%20Assessment%20Submission)


## <a name="links">🔗 Links</a>

You can find important links of the technology used below:

- <a href="https://www.nativewind.dev/quick-starts/expo" target="_blank">Expo NativeWind Setup</a>
- <a href="https://www.nativewind.dev/v4/getting-started/typescript" target="_blank">TypeScript Support for
  NativeWind</a>
- <a href="https://docs.expo.dev/guides/using-eslint/" target="_blank">Eslint and Prettier Setup</a>
- <a href="https://neon.tech/" target="_blank">Serverless NeonDB</a>
- <a href="https://go.clerk.com/DtiSBEI" target="_blank">Clerk Auth</a>
- <a href="https://clerk.com/docs/quickstarts/expo" target="_blank">Clerk Expo Quickstart</a>
- <a href="https://clerk.com/docs/custom-flows/oauth-connections" target="_blank">Clerk Expo OAuth</a>
