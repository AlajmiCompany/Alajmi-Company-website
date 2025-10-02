const jobsData = [
  {
    id: 1,
    img: "/jobs/security.png",
    title_en: "Security Guard",
    title_ar: "حارس أمن",
    desc_en: "Patrolling and monitoring workplaces to guard property against theft and vandalism, monitoring entry points to workplaces, and maintaining order.",
    desc_ar: "حراسة ومراقبة أماكن العمل لحماية الممتلكات من السرقة والتخريب، مراقبة مداخل أماكن العمل، والحفاظ على النظام.",
    details_en: "Patrolling and monitoring workplaces to guard property against theft and vandalism, monitoring entry points to workplaces, and maintaining order. Number of employees: 4. Years of Experience: 1. Qualification: Secondary degree.",
    details_ar: "حراسة ومراقبة أماكن العمل لحماية الممتلكات من السرقة والتخريب، مراقبة مداخل أماكن العمل، والحفاظ على النظام. عدد الموظفين: 4. سنوات الخبرة: 1. المؤهل: شهادة ثانوية."
  },
  {
    id: 2,
    img: "/jobs/driver.png",
    title_en: "New Driver",
    title_ar: "سائق جديد",
    desc_en: "Driving company vehicles to transport staff and materials safely and efficiently.",
    desc_ar: "قيادة مركبات الشركة لنقل الموظفين والمواد بأمان وكفاءة.",
    details_en: "Safely operating company vehicles to transport staff, equipment, and materials between sites. Ensuring compliance with traffic laws and company policies. Number of employees: 3. Years of Experience: 2. Qualification: Driving license.",
    details_ar: "قيادة مركبات الشركة لنقل الموظفين والمعدات والمواد بين المواقع. الالتزام بقوانين المرور وسياسات الشركة. عدد الموظفين: 3. سنوات الخبرة: 2. المؤهل: رخصة قيادة."
  },
  {
    id: 3,
    img: "/jobs/engineer.png",
    title_en: "Surveying Engineer",
    title_ar: "مهندس مساح",
    desc_en: "Carrying out site surveying, land measurements, and preparing related technical reports.",
    desc_ar: "تنفيذ أعمال المساحة الميدانية وقياسات الأراضي وإعداد التقارير الفنية المتعلقة.",
    details_en: "Conducting field surveying and land measurements, preparing technical reports, and ensuring accuracy in project planning and execution. Number of employees: 2. Years of Experience: 3. Qualification: Bachelor's degree in Surveying Engineering.",
    details_ar: "تنفيذ أعمال المساحة الميدانية وقياسات الأراضي، إعداد التقارير الفنية وضمان دقة التخطيط والتنفيذ للمشاريع. عدد الموظفين: 2. سنوات الخبرة: 3. المؤهل: بكالوريوس هندسة مساحة."
  },
  {
    id: 4,
    img: "/jobs/project-manager.png",
    title_en: "Project Manager",
    title_ar: "مدير مشروع",
    desc_en: "Responsible for planning, executing, and closing projects. Manages teams, resources, and client communication to ensure successful delivery.",
    desc_ar: "مسؤول عن تخطيط المشاريع وتنفيذها وإغلاقها. يدير الفرق والموارد والتواصل مع العملاء لضمان إنجاز المشروع بنجاح.",
    details_en: "Leading project planning, execution, and delivery, managing teams and resources, ensuring adherence to timelines, budgets, and quality standards. Number of employees: 1. Years of Experience: 5. Qualification: Bachelor's degree in Civil Engineering or Project Management.",
    details_ar: "قيادة تخطيط المشاريع وتنفيذها وإنجازها، إدارة الفرق والموارد، وضمان الالتزام بالجداول الزمنية والميزانيات ومعايير الجودة. عدد الموظفين: 1. سنوات الخبرة: 5. المؤهل: بكالوريوس هندسة مدنية أو إدارة مشاريع."
  },
  {
    id: 5,
    img: "/jobs/road-engineer.png",
    title_en: "Road Civil Engineer",
    title_ar: "مهندس مدني طرق",
    desc_en: "Designing, supervising, and maintaining road construction projects, ensuring compliance with safety and engineering standards.",
    desc_ar: "تصميم والإشراف على مشاريع إنشاء الطرق وصيانتها، وضمان الالتزام بمعايير السلامة والهندسة.",
    details_en: "Designing, supervising, and maintaining road construction and infrastructure projects. Ensuring compliance with safety standards and engineering codes. Number of employees: 2. Years of Experience: 4. Qualification: Bachelor's degree in Civil Engineering.",
    details_ar: "تصميم والإشراف على مشاريع الطرق والبنية التحتية وصيانتها. ضمان الالتزام بمعايير السلامة وأكواد الهندسة. عدد الموظفين: 2. سنوات الخبرة: 4. المؤهل: بكالوريوس هندسة مدنية."
  },
  {
    id: 6,
    img: "/jobs/tech-support.png",
    title_en: "Computer Technical Support",
    title_ar: "الدعم الفني للحاسب",
    desc_en: "Providing technical assistance, troubleshooting hardware/software issues, and maintaining IT systems within the company.",
    desc_ar: "تقديم الدعم الفني، حل مشاكل الأجهزة والبرامج، وصيانة أنظمة تقنية المعلومات داخل الشركة.",
    details_en: "Providing IT technical support, troubleshooting hardware and software issues, maintaining and upgrading systems, and ensuring smooth IT operations. Number of employees: 2. Years of Experience: 2. Qualification: Diploma or Bachelor's degree in Computer Science/IT.",
    details_ar: "تقديم الدعم الفني لتقنية المعلومات، حل مشاكل الأجهزة والبرامج، صيانة وتحديث الأنظمة وضمان سير العمليات التقنية بسلاسة. عدد الموظفين: 2. سنوات الخبرة: 2. المؤهل: دبلوم أو بكالوريوس في علوم الحاسوب/تكنولوجيا المعلومات."
  },
  {
    id: 7,
    img: "/jobs/refrigeration.png",
    title_en: "Refrigeration and Air Conditioning Technician",
    title_ar: "فني تبريد وتكييف",
    desc_en: "Responsible for installation, repair, and maintenance of refrigeration and air conditioning systems.",
    desc_ar: "مسؤول عن تركيب وصيانة وإصلاح أنظمة التبريد والتكييف.",
    details_en: "Installing, maintaining, and repairing refrigeration and air conditioning systems, ensuring efficient performance and compliance with safety standards. Number of employees: 2. Years of Experience: 3. Qualification: Diploma in Refrigeration and Air Conditioning.",
    details_ar: "تركيب وصيانة وإصلاح أنظمة التبريد والتكييف وضمان الأداء الفعال والالتزام بمعايير السلامة. عدد الموظفين: 2. سنوات الخبرة: 3. المؤهل: دبلوم تبريد وتكييف."
  },
  {
    id: 8,
    img: "/jobs/mechanical.png",
    title_en: "Mechanical Technician",
    title_ar: "فني ميكانيكا",
    desc_en: "Carrying out mechanical maintenance and repairs for machines and equipment.",
    desc_ar: "تنفيذ أعمال الصيانة الميكانيكية وإصلاح الآلات والمعدات.",
    details_en: "Diagnosing and repairing car malfunctions, implementing preventive maintenance programs for equipment and devices, according to maintenance manuals and instructions, and applying occupational health and safety procedures. Number of employees: 2. Years of Experience: 2. Qualification: Diploma (Mechanical Technician).",
    details_ar: "تشخيص وإصلاح أعطال السيارات، وتنفيذ برامج الصيانة الوقائية للمعدات والأجهزة وفقًا لكتيبات وتعليمات الصيانة، وتطبيق إجراءات وتعليمات الصحة والسلامة المهنية. عدد الموظفين: 2. سنوات الخبرة: 2. المؤهل: دبلوم (فني ميكانيكا)."
  },
  {
    id: 9,
    img: "/jobs/hr.png",
    title_en: "Administrative Specialist",
    title_ar: "أخصائي إداري",
    desc_en: "Handling HR and administrative tasks including staff coordination, reporting, and office management.",
    desc_ar: "إدارة المهام الإدارية والموارد البشرية بما في ذلك تنسيق الموظفين، إعداد التقارير، وإدارة المكاتب.",
    details_en: "Managing HR and administrative operations including staff coordination, performance reporting, office management, and compliance with company policies. Number of employees: 2. Years of Experience: 3. Qualification: Bachelor's degree in Business Administration or HR.",
    details_ar: "إدارة العمليات الإدارية والموارد البشرية بما في ذلك تنسيق الموظفين، إعداد تقارير الأداء، إدارة المكاتب، وضمان الالتزام بسياسات الشركة. عدد الموظفين: 2. سنوات الخبرة: 3. المؤهل: بكالوريوس إدارة أعمال أو موارد بشرية."
  },
  {
    id: 10,
    img: "/jobs/oracle.png",
    title_en: "Oracle Applications Programmer",
    title_ar: "مبرمج تطبيقات أوراكل",
    desc_en: "Developing, maintaining, and customizing Oracle applications to support business needs.",
    desc_ar: "تطوير وصيانة وتخصيص تطبيقات أوراكل لدعم احتياجات العمل.",
    details_en: "Developing, maintaining, and customizing Oracle applications to meet business requirements, ensuring integration with existing systems, and providing technical support. Number of employees: 1. Years of Experience: 4. Qualification: Bachelor's degree in Computer Science/Software Engineering.",
    details_ar: "تطوير وصيانة وتخصيص تطبيقات أوراكل لتلبية متطلبات العمل وضمان تكاملها مع الأنظمة القائمة وتقديم الدعم الفني. عدد الموظفين: 1. سنوات الخبرة: 4. المؤهل: بكالوريوس علوم الحاسوب/هندسة البرمجيات."
  }
];

export default jobsData;
