import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    placeholder: string
    obrigatorio: boolean
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'tel' | 'number'
}  

const CampoTexto = ({aoAlterado, label, valor, placeholder, obrigatorio = false, type='text'}:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada} type={type}/>
        </div>
    )
}

export default CampoTexto