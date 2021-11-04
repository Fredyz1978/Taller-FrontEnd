import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { mockNewProject } from "../../utils/mock-response";
import { Project } from "../../model/project";
import styled from "styled-components";
import ProjectCard from "../cards/ProjectCard";
import { themes } from "../../styles/ColorStyles";
import { MediumText, H1 } from "../../styles/TextStyles";

interface Response {
    projects?: Project;
}

const NewProject = () => {
    const { t } = useTranslation();

    const [response, setResponse] = useState<Response | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function retrieveInfo() {
            try {
              const projects: Project = await mockNewProject("Titulo 1","Descripción 1","HTML","1.0.0");
              setResponse({projects});
            } catch {
              console.log("Error");
              setError("Info not found");
            }
        }

        retrieveInfo();
    });
    return (
        <Wrapper>
          <ContentWrapper>
          <TitleForm>{t("project.newproject_title")}</TitleForm>
            {response && (
              <ResponseWrapper>
                <ProjectWrapper>
                    {response?.projects && <ProjectCard project={response?.projects} />}
                </ProjectWrapper>
              </ResponseWrapper>
            )}
    
            {error && <ErrorMsg>{t("search.error")}</ErrorMsg>}
          </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  overflow: hidden;

  @media (min-width: 700px) {
    padding-bottom: 200px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 30px 30px 60px 30px;
  display: grid;

  @media (max-width: 450px) {
    padding: 30px 4px 60px 4px;
  }
`;

const TitleForm = styled(H1)`
  text-align: center;
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`

const ResponseWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 1080px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

const AboutMeWrapper = styled.div`
  display: grid;
  align-items: flex-start;

  @media (max-width: 810px) {
    align-items: center;
    justify-content: center;
  }
`;

const ProjectWrapper = styled.div`
  max-width: 2400px;
  margin: 0 auto;
  padding: 20px 30px 120px 30px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 40px;

  @media (max-width: 1440px) {
    justify-items: center;
    grid-template-columns: auto auto;
  }

  @media (max-width: 1080px) {  
    grid-template-columns: auto auto auto;
    gap: 20px;
  }

  @media (max-width: 920px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 700px) {
    grid-template-columns: auto;
    gap: 0px;
  }
`;

const ErrorMsg = styled(MediumText)`
  text-align: center;
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export default NewProject;