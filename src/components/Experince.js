import WorkExperience from './WorkExperience';

const Experience = () => {
    const workExperiences = [
        {
          company: 'Accenture, India',
          location: 'Pune, India',
          role: 'Application Development Analyst',
          startDate: 'September 2022',
          endDate: 'Present',
          responsibilities: [
            'Working as an Angular web developer to build responsive web pages for Accenture AWS Business Group (AABG) to help clients become cloud-native by enabling them to set up cloud infrastructure through the web application.',
            'Integrated APIs and used Reactive forms to create multi-step forms to fetch inputs, apply validations, and send the entered value to the backend.',
            'Created pages having features like instant search (using Pipes), applying filters, sorting, and displaying status by manipulating components of the Angular Material UI library and writing logic in TypeScript.',
          ],
          techStacks: ['Angular', 'Reactive Forms', 'Angular Material', 'TypeScript'],
        },
        {
          company: 'Accenture, India',
          location: 'Bengaluru, India',
          role: 'Application Development Associate',
          startDate: 'June 2021',
          endDate: 'August 2022',
          responsibilities: [
            'Created reusable UI components such as charts, maps, tables and other graphical representations for data visualization using Angular to build a component library for Accenture.',
            'Wrote unit test cases using Jasmine and Karma to increase code coverage.',
            'Analysed SonarQube reports and refactored code to resolve code smells and security hotspots to improve code quality and decrease code complexity.',
            'Cleared TechLeap by Accenture and was eligible for fast-track promotion.',
          ],
          techStacks: ['Angular', 'Jasmine', 'Karma', 'SonarQube'],
        },
        {
          company: 'Auxentious Technologies',
          location: 'Bhubaneswar, Odisha',
          role: 'Front-end Developer',
          startDate: 'January 2021',
          endDate: 'April 2021',
          responsibilities: [
            'Involved in building the front-end application for the company using React.',
            'Worked with the UX team to analyse and understand business requirements and converted the same into UI application.',
            'Collaborated with the Backend team to create JSON schema and integrate API with UI.'
          ],
          techStacks: ['React', 'Jest', 'Tailwind CSS'],
        },
        {
          company: 'DRDO',
          location: 'Balasore, Odisha',
          role: 'Project: Classify Different Air-Borne Objects',
          startDate: 'May 2019',
          endDate: 'June 2019',
          responsibilities: [
            'The classification was done by applying machine learning algorithms to data received from radars.',
            'Parameters such as signal strength, acceleration, altitude and velocity were considered. Partitioning of the trajectory was done using the moving window concept.',
            'The accuracy rates of the classifier models were noted. It was concluded that the best model for such data is the Decision Tree (Accuracy: 99.69%)',
          ],
          techStacks: ['Python', 'Machine Learning'],
        },
      ];

  return (
<div>
      {workExperiences.map((experience, index) => (
        <WorkExperience
          key={index}
          company={experience.company}
          location={experience.location}
          role={experience.role}
          startDate={experience.startDate}
          endDate={experience.endDate}
          responsibilities={experience.responsibilities}
          techStacks={experience.techStacks}
        />
      ))}
    </div>
  );
};

export default Experience;