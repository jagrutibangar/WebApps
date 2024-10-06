import React from 'react'

export default function order() {
    return(
<div style={{marginLeft:500, marginTop:-440, borderEndEndRadius:40}}>
<div className="card" style={{width:400,marginLeft:60,marginTop:30,outlineColor:"golden",borderRadius:40,borderTopRightRadius:40,borderTopLeftRadius:40, marginBottom:300, height:410}}>
<img src="https://media.istockphoto.com/id/1314632869/photo/close-up-of-woman-packing-food-for-delivery.webp?b=1&s=170667a&w=0&k=20&c=SrsOLqOf49BObGzxVYnHSqcBkWNyxP0iBUF3anqQd60=" className="card-img-top" alt="..." style={{height:280}}/>
<div className="card-body">
<h5 className="card-title">Order Takeout!</h5>
<p className="card-text" >Order your favorite meal anytime!</p>
<a href="/" className="btn btn-primary" style={{backgroundColor:'brown',borderRadius:400,borderTopRightRadius:40,borderTopLeftRadius:400,borderTopRightRadius:400,borderBottomRightRadius:400}}>Order Now</a>
</div>
</div>
</div>
    )
}