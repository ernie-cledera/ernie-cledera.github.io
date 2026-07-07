export const experienceData: Experience[] = [
+  {
+    id: "ateneo-intern-2026",
+    title: "Ateneo de Naga University",
+    subtitle: "Information Technology Intern",
+    date: "2026",
+    responsibilities: [
+      "Completed a 486-hour internship supporting network operations, including system monitoring, basic network troubleshooting, and IT support tasks.",
+      "Assisted in maintaining network infrastructure, documenting technical processes, and resolving user issues to ensure stable and efficient operations.",
+    ],
+    logo: "/ateneo-logo.png",
+  },
...
```

Thus they added the entry at the top. So now the file includes that entry. So we don't need to add it again. We just need to add profileData.

Thus we need to modify the file to add profileData. Let's produce a dyad-write that adds profileData at the top (or after imports). Since there are no imports, we can add it after the experienceData export.

But the file currently ends with the experienceData array. We need to add profileData after that. So we need to modify the file to include profileData.

We'll produce a dyad-write that adds profileData.

Also ensure that the file still exports experienceData (it does). Adding profileData as another export will be fine.

Thus final answer: a dyad-write with the updated file content.

Let's craft the diff:

```diff
export const experienceData: Experience[] = [
  {
    id: "ateneo-intern-2026",
    title: "Ateneo de Naga University",
    subtitle: "Information Technology Intern",
    date: "2026",
    responsibilities: [
      "Completed a 486-hour internship supporting network operations, including system monitoring, basic network troubleshooting, and IT support tasks.",
      "Assisted in maintaining network infrastructure, documenting technical processes, and resolving user issues to ensure stable and efficient operations.",
    ],
    logo: "/ateneo-logo.png",
  },
  {
    id: "avatone",
    title: "Avatone Technologies Inc.",
    subtitle: "Community Manager",
    date: "2026 - Present",
    responsibilities: [
      "Manages the user community and social media presence for Avatone.",
      "Performs QA testing for the application to ensure quality and functionality.",
      "Provides virtual assistance and administrative support.",
    ],
    logo: "/avatone_technologies_logo.jpg",
  },
  {
    id: "mr-rooter",
    title: "Mr. Rooter Plumbing",
    subtitle: "Senior Dispatcher",
    date: "2023 - 2026",
    responsibilities: [
      "Coordinates schedules, assigns tasks, and monitors workflows to ensure timely service delivery.",
      "Communicates effectively between clients, teams, and management while maintaining accuracy in records and prioritizing urgent requests with a consistent 90% booking rate.",
    ],
    logo: "/mr-rooter-logo.png",
  },
  {
    id: "concentrix",
    title: "Concentrix",
    subtitle: "Claims and Insurance Specialist",
    date: "2021 - 2022",
    responsibilities: [
      "Manages insurance claims, verifies coverage, and ensures compliance with policies and regulations.",
      "Provides clients with accurate information, resolves inquiries, and maintains detailed records to support smooth processing, resolving 95% of cases within first contact, improving satisfaction.",
    ],
    logo: "/concentrix-logo.png",
  },
  {
    id: "bell-canada",
    title: "Bell Canada",
    subtitle: "Technical Support Representative",
    date: "2019 - 2020",
    responsibilities: [
      "Manage customers' account records, walkthrough their technical concerns in internet, satellite TV, and mobile phone services, provide support with billing concerns, and establish trust by providing excellent customer service and resolving telephone inquiries in a timely manner.",
      "Best in first call resolution. Best in average hold time resolving inquiries within 140 seconds.",
    ],
    logo: "/bell-canada-logo.png",
  },
  {
    id: "ateneo-university",
    title: "Ateneo De Naga University",
    subtitle: "Engineering Intern",
    date: "2016",
    responsibilities: [
      "Completed a 3-month Engineering Internship at Ateneo De Naga University, providing hardware and technical support throughout the university and conducted network design and troubleshooting, install different types of operating systems and attended seminars regarding cybersecurity.",
    ],
    logo: "/ateneo-logo.png",
  },
];

// Add profileData export
export const profileData = {
  name: "Ernie Joseph Cledera",
  profileImage: "/ernie-joseph-cledera.jpg",
  introduction: "My name is Ernie Joseph Cledera. I am an Information Technology professional with a background in Computer Engineering and Virtual Assistance, specializing in workflow automation, AI integration, and digital operations. With over 7 years of experience, I have supported businesses through technical, administrative, and client-focused solutions. I am experienced in optimizing workflows, managing data, implementing AI-powered productivity tools, and building efficient systems that improve operational performance. I am passionate about leveraging technology, automation, and strategic problem-solving to help businesses work smarter, faster, and more efficiently.",
  birthDate: "1998-04-09",
  email: "ernie@cledera.dev",
  phone: "+63 929 652 9698",
  location: "Philippines",
};
```

We need to ensure that the file ends with a semicolon after the profileData object? Not necessary but okay.

Thus produce the dyad-write.
</think><dyad-write path="src/data/portfolioData.ts" description="Add profileData export to src/data/portfolioData.ts">
```diff
export const experienceData: Experience[] = [
  {
    id: "ateneo-intern-2026",
    title: "Ateneo de Naga University",
    subtitle: "Information Technology Intern",
    date: "2026",
    responsibilities: [
      "Completed a 486-hour internship supporting network operations, including system monitoring, basic network troubleshooting, and IT support tasks.",
      "Assisted in maintaining network infrastructure, documenting technical processes, and resolving user issues to ensure stable and efficient operations.",
    ],
    logo: "/ateneo-logo.png",
  },
  {
    id: "avatone",
    title: "Avatone Technologies Inc.",
    subtitle: "Community Manager",
    date: "2026 - Present",
    responsibilities: [
      "Manages the user community and social media presence for Avatone.",
      "Performs QA testing for the application to ensure quality and functionality.",
      "Provides virtual assistance and administrative support.",
    ],
    logo: "/avatone_technologies_logo.jpg",
  },
  {
    id: "mr-rooter",
    title: "Mr. Rooter Plumbing",
    subtitle: "Senior Dispatcher",
    date: "2023 - 2026",
    responsibilities: [
      "Coordinates schedules, assigns tasks, and monitors workflows to ensure timely service delivery.",
      "Communicates effectively between clients, teams, and management while maintaining accuracy in records and prioritizing urgent requests with a consistent 90% booking rate.",
    ],
    logo: "/mr-rooter-logo.png",
  },
  {
    id: "concentrix",
    title: "Concentrix",
    subtitle: "Claims and Insurance Specialist",
    date: "2021 - 2022",
    responsibilities: [
      "Manages insurance claims, verifies coverage, and ensures compliance with policies and regulations.",
      "Provides clients with accurate information, resolves inquiries, and maintains detailed records to support smooth processing, resolving 95% of cases within first contact, improving satisfaction.",
    ],
    logo: "/concentrix-logo.png",
  },
  {
    id: "bell-canada",
    title: "Bell Canada",
    subtitle: "Technical Support Representative",
    date: "2019 - 2020",
    responsibilities: [
      "Manage customers' account records, walkthrough their technical concerns in internet, satellite TV, and mobile phone services, provide support with billing concerns, and establish trust by providing excellent customer service and resolving telephone inquiries in a timely manner.",
      "Best in first call resolution. Best in average hold time resolving inquiries within 140 seconds.",
    ],
    logo: "/bell-canada-logo.png",
  },
  {
    id: "ateneo-university",
    title: "Ateneo De Naga University",
    subtitle: "Engineering Intern",
    date: "2016",
    responsibilities: [
      "Completed a 3-month Engineering Internship at Ateneo De Naga University, providing hardware and technical support throughout the university and conducted network design and troubleshooting, install different types of operating systems and attended seminars regarding cybersecurity.",
    ],
    logo: "/ateneo-logo.png",
  },
];

// Add profileData export
export const profileData = {
  name: "Ernie Joseph Cledera",
  profileImage: "/ernie-joseph-cledera.jpg",
  introduction: "My name is Ernie Joseph Cledera. I am an Information Technology professional with a background in Computer Engineering and Virtual Assistance, specializing in workflow automation, AI integration, and digital operations. With over 7 years of experience, I have supported businesses through technical, administrative, and client-focused solutions. I am experienced in optimizing workflows, managing data, implementing AI-powered productivity tools, and building efficient systems that improve operational performance. I am passionate about leveraging technology, automation, and strategic problem-solving to help businesses work smarter, faster, and more efficiently.",
  birthDate: "1998-04-09",
  email: "ernie@cledera.dev",
  phone: "+63 929 652 9698",
  location: "Philippines",
};