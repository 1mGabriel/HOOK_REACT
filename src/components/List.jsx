import { useEffect, useState } from "react"

const List = ({getItems}) => {
  const [items, setItems] = useState([])

  useEffect(()=>{

    console.log("Buscando os dados no DB")

    setItems(getItems)

  }, [getItems])
  
    return (
    <div>
      {items && items.map((itens)=>
        <p key={itens}>{itens}</p>
      )}
    </div>
  )
}

export default List
