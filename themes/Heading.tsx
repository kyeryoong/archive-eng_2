import styled from "styled-components";

const HeadingStyle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(50, 50, 50);
`;

export default function Heading({
  children,
  marginTop,
}: {
  children: string;
  marginTop?: number;
}) {
  return (
    <HeadingStyle style={{ marginTop: marginTop }}>{children}</HeadingStyle>
  );
}
