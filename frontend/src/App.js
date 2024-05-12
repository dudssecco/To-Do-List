import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h2``;

function App() {
  const [tasks, setTasks] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getTasks = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setTasks(res.data.sort((a, b) => (a.descricao > b.descricao ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [setTasks]);

  return (
    <>
      <Container>
        <Title></Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks} />
        <Grid tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
};

export default App;