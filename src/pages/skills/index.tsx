// import Skill from "@/components/Skill";
import Skill from "@/components/Skill/index";

import * as S from "./styled";

export default function Skills() {
  return (
    <S.Container>
      <S.Category>
        <S.CategoryName>Web Development</S.CategoryName>
        <S.CategoryNumber>10</S.CategoryNumber>
      </S.Category>

      <S.SkillsWrapper>
        <Skill
          name="JavaScript"
          nameColor="black"
          logoColor="black"
          rgb1={[240, 219, 79]}
          description="Programming Language for Dynamic Web Page Content"
        />
        <Skill
          name="TypeScript"
          nameColor="white"
          logoColor="white"
          rgb1={[49, 120, 198]}
          description="Strongly Typed Programming Language that Builds on JavaScript"
        />
        <Skill
          name="React"
          nameColor="white"
          logoColor="white"
          rgb1={[97, 218, 251]}
          description="JavaScript Library for Building User Interfaces"
        />
        <Skill
          name="Next js"
          displayName="Next.js"
          nameColor="white"
          logoColor="white"
          rgb1={[70, 70, 70]}
          description="React-based Framework for Building Web Applications"
        />
        <Skill
          name="CSS"
          nameColor="white"
          logoColor="white"
          rgb1={[41, 101, 241]}
          description="Style Sheet Language for Presentation of Documents"
        />
        <Skill
          name="Styled Components"
          nameColor="white"
          displayName="styled components"
          logoColor="color"
          rgb1={[219, 112, 147]}
          rgb2={[243, 182, 97]}
          description="Library that Allows to Write CSS in JavaScript While Building Custom Components in React"
        />
        <Skill
          name="MobX"
          nameColor="white"
          logoColor="white"
          rgb1={[223, 94, 17]}
          description="State Management Library with Functional Reactive Programming"
        />
        <Skill
          name="Firebase"
          nameColor="white"
          logoColor="color"
          rgb1={[5, 155, 229]}
          description="Backend Cloud Computing Service and Application Development Platform"
        />
        <Skill
          name="Netlify"
          nameColor="white"
          logoColor="white"
          rgb1={[5, 189, 186]}
          description="Development Platform for Serverless Backend Services"
        />
        <Skill
          name="Vercel"
          nameColor="white"
          logoColor="white"
          rgb1={[70, 70, 70]}
          description="Website Hosting and Deploying Platform"
        />
      </S.SkillsWrapper>

      <S.Category>
        <S.CategoryName>Cloud</S.CategoryName>
        <S.CategoryNumber>3</S.CategoryNumber>
      </S.Category>

      <S.SkillsWrapper>
        <Skill
          name="Amazon EC2"
          nameColor="white"
          logoColor="white"
          rgb1={[255, 153, 0]}
          description="Cloud Computing Platform"
        />
        <Skill
          name="Amazon RDS"
          nameColor="white"
          logoColor="white"
          rgb1={[76, 114, 242]}
          description="Cloud-based Relational Database"
        />
        <Skill
          name="Amazon Route 53"
          nameColor="white"
          logoColor="white"
          rgb1={[159, 100, 253]}
          description="Cloud-based Domain Name System"
        />
      </S.SkillsWrapper>

      <S.Category>
        <S.CategoryName>Database</S.CategoryName>
        <S.CategoryNumber>3</S.CategoryNumber>
      </S.Category>

      <S.SkillsWrapper>
        <Skill
          name="MySQL"
          nameColor="white"
          logoColor="white"
          rgb1={[83, 130, 161]}
          rgb2={[255, 165, 24]}
          description="Open-Source Relational Database"
        />
        <Skill
          name="MariaDB"
          nameColor="white"
          logoColor="white"
          rgb1={[53, 65, 104]}
          description="Fork of the MySQL Relational Database"
        />
        <Skill
          name="MongoDB"
          nameColor="white"
          logoColor="white"
          rgb1={[0, 104, 74]}
          description="NoSQL and Document-Oriented Database"
        />
      </S.SkillsWrapper>

      <S.Category>
        <S.CategoryName>Version Control</S.CategoryName>
        <S.CategoryNumber>3</S.CategoryNumber>
      </S.Category>

      <S.SkillsWrapper>
        <Skill
          name="Git"
          nameColor="white"
          logoColor="white"
          rgb1={[240, 80, 50]}
          description="Software for Version Controls of Files"
        />
        <Skill
          name="GitHub"
          nameColor="white"
          logoColor="white"
          rgb1={[64, 63, 63]}
          description="Platform and Cloud-based for Version Control Service"
        />
        <Skill
          name="GitLab"
          nameColor="white"
          logoColor="white"
          rgb1={[252, 109, 33]}
          description="Platform and Cloud-based for Version Control Service"
        />
      </S.SkillsWrapper>
    </S.Container>
  );
}
