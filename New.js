import React from 'react'

export default function New() {
    return(
<div style={{marginLeft:500, marginTop:-710 , borderEndEndRadius:40}}>
<div className="card" style={{width:400,marginLeft:520,marginTop:30,outlineColor:"golden",borderRadius:40,borderTopRightRadius:40,borderTopLeftRadius:40, marginBottom:300, height:410}}>
<img src="https://img.freepik.com/free-photo/delicious-dish-restaurant_23-2148018792.jpg?w=996&t=st=1704017456~exp=1704018056~hmac=43a11028847f218bc84a310647819fe883d93a4f68bf160d68b579766f711e69" className="card-img-top" alt="..." style={{height:280}}/>
<div className="card-body">
<h5 className="card-title">What's New!</h5>
<p className="card-text" >Look what's brewing!</p>
<a href="/" className="btn btn-primary" style={{backgroundColor:'brown',borderRadius:400,borderTopRightRadius:40,borderTopLeftRadius:400,borderTopRightRadius:400,borderBottomRightRadius:400}}>Look</a>
</div>
</div>
</div>
    )
}