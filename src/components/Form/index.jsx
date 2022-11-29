import "./Form.css";
import TextField from "../TextField";
import SuspendedList from "../SuspendedList";
import Button from "../Button";

const Form = () => {

    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "Ux e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const onSave = (event) =>{
        event.preventDefault();
    }

    return(
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do invocador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <SuspendedList required={true} label="Time" itens={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;