import './card.css';

export default function Cards ({nome,ra,codCurso,img}){
    return(

            < div className='card'>
                <div className='imge'>
                   <img src={img} width={150} height={150}/> 
                </div>
                <div className='ra'>
                    {ra}
                </div>
                <div className='nome'>
                    {nome}
                </div>
                <div className='codCurso'>
                    Curso: {codCurso}
                </div>
            </div>
      
      
    )
}