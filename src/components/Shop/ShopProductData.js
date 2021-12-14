import React,{useState} from 'react'


function ShopProductData() {
    const [Choise, setChoise] = useState("descript")
    const ChangeCoiseDescript = () => {
        setChoise("descript");
    }
    const ChangeCoiseReviews = () => {
        setChoise("reviews");
    }
    return (
        <section id = "shop-product-data">
            <div className='container'>
                <div id = 'shop-product-data-btn-group'>
                    <button className='page-btn' onClick={() => ChangeCoiseDescript()}>Description</button>
                    <button className='page-btn' onClick={() => ChangeCoiseReviews()}>Reviews</button>
                </div>
                {
                    Choise == "descript" ? 
                    <article id = 'descript'>
                        <h3>Product Description</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. runway heading towards a streamlined cloud solution.</p>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence.</p>
                    </article>


                    :

                    <div></div>
                    
                }
            </div>
        </section>
    )
}

export default ShopProductData
