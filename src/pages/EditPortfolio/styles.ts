import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 736px;
  padding: 5px 15px;
`;

export const Bar = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8eaeb;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    max-width: 320px !important;
    max-height: 315px !important;

    border: 2px solid #00cc74;
    border-radius: 50%;

    @media only screen and (max-width: 500px) {
      max-width: 220px !important;
      max-height: 215px !important;
    }
  }
`;

export const Description = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 665px;
`;

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 585px;
  
  margin-top: 25px;

  padding-bottom: 25px;
`;

export const Text = styled.span`
  padding: 5px 15px;
  width: 100%;

  font: 16px 'Poppins', sans-serif;
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;

  border-radius: 2px;
  border: 2px solid #e8eaeb;

  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 5px 15px;
  width: 100%;

  background: transparent;
  border: none;

  color: #555;

  font: 16px 'Poppins', sans-serif;
`;

export const TextareaArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;

  border-radius: 2px;
  border: 2px solid #e8eaeb;

  margin-bottom: 8px;
`;

export const TextareaInput = styled.textarea`
  padding: 5px 15px;

  min-width: 100%;
  width: 100%;

  min-height: 60px;
  max-height: 450px;

  background: transparent;
  border: none;

  color: #555;

  font: 16px 'Poppins', sans-serif;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  padding: 10px 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid #eff0f1;
  color: #FFF;

  padding: 5px 15px;
  
  background: #00cc74;

  cursor: pointer;

  font: 16px 'Poppins', sans-serif;

  transition: 0.2s transform;

  :hover {
    transform: translateY(-1px);
  }
`;