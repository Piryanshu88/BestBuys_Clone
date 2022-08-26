

function navbar(){
    return `
    <div id="navbar">
    <div id="first">
        <div id="a">
            <img id="one" src="data:image/png;base64,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" alt="">
            <div><i class="fa fa-bars fa-1x"></i>MENU</div>
            <input type="Search" name="" id="search" placeholder="Search Best Buy">
            <img id="micro" src="https://api.iconify.design/carbon/search.svg?color=blue" alt="">
        </div>
        <div id="b">
            <div id="g">
                <img id="store" src="https://api.iconify.design/bxs/store-alt.svg?color=white" alt="">
                <div>Aiea</div>
           </div>
           <div id="c">
                <img id="cart_logo" src="https://api.iconify.design/ant-design/shopping-cart-outlined.svg?color=white">
                <div>Cart</div>
           </div>
        </div>
      
       
     </div>
     <hr>
    
     <div id="second">
        <div id="second-first">
            <div class="dropdown">
                <span><a href="#">Back-to-School<i class="fa fa-caret-down"></i></a></span>
                <div class="dropdown-content">
                <p>Back to School Deals</p>
                <p>College Resources</p>
                <p>K-12 Tech</p>
                <p>Back-to-School Checklist</p>
                <p><i class="fa fa-times"></i>Close</p>
                </div>
            </div>
            <div><a href="#">Top Deals</a></div>
            <div><a href="#">Deal of the Day</a></div>
            <div><a href="#">Totaltech Membership</a></div>
            <div><a href="#">Credit Cards</a></div>
            <div><a href="#">Gift Cards</a></div>
            <div><a href="#">Health & Wellness</a></div>
            <div class="dropdown">
                <span><a href="#">More<i class="fa fa-caret-down"></i></a></span>
                <div class="dropdown-content">
                <p>Best Buy Outlet</p>
                <p>Best Buy Business</p>
                <p><i class="fa fa-times"></i>Close</p>
              </div>
             </div>


        </div>


        <div id="second-last">
            <div  class="dropdown">
                <span ><a href="#"><i class="fa fa-user-circle"></i>Account<i class="fa fa-caret-down"></i></a></span>
                <div id="scroll" class="dropdown-content">
                <p id="para">Becoming a My Best Buy® member comes with
                    easy order tracking, rewards, offers and more.</p>
                <button class="btn" id="dark">Sign In</button>
                <button class="btn">Create Account</button>
                
                <p><a class="blue" href="#">Account</a></p>
                <p><a class="blue" href="#">Order & Purchases</a></p>
                <p><a class="blue" href="#">Your products</a></p>
                
                <p><a class="blue" href="#">Payment Methods</a></p>
                <p><a class="blue" href="#">Protection Plans & Subscriptions</a></p>
                <p><a class="blue" href="#">Digital Library</a></p>
                <p><a class="blue" href="#">Best Buy Totaltech</a></p>
                <p><a class="blue" href="#">Free Home Consultation</a></p>
                <p><a class="blue" href="#">Member Offers</a></p>
    
                <p><a class="blue" href="#">Account Settings</a></p>
                <p><i class="fa fa-times"></i>Close</p>
                </div>
            </div>

                <div class="dropdown">
                    <span><a href="#">Recently Viewed<i class="fa fa-caret-down"></i></a></span>
                    <div class="h" class="dropdown-content">
                        <div class="up">
                            
                            <div class="m" ><i class="fa fa-clock-o fa-2x"></i>Recently Viewed</div>
                            <div class="line"></div>
                            <div id="i">Manage all your recently viewed items ›</div>
                            <div id="j"><i class="fa fa-times"></i></div>
                           
                        </div>
                        <div class="down">
                            <p></p>
                            <div id="k">Nothing to view now</div>
                        </div>
                    </div>
                </div>


                <div class="dropdown">
                    <span><a href="#">Order Status<i class="fa fa-caret-down"></i></a></span>
                    <div class="h" class="dropdown-content">
                        <div class="l" class="up">
                            <div class="m"><i class="fa fa-gift fa-2x" aria-hidden="true"></i>Order Status</div>
                            
                            <div id="n"><i class="fa fa-times"></i></div>
                        </div>
                        <div id="down">
                            <div class="down-first">
                                <p></p>
                                <h2 id="p">Hi there! Looking
                                    for a current order?</h2>
                                <p id="q">You'll need to sign in or have your order number handy.</p>
                                <button id="r">Continue</button>
                            </div>
                            <div class="down-second">
                                <img class="s" src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png" alt="">
                            </div>
                            
                        </div>
                    </div>
                </div>
                

                <div class="dropdown">
                    <span><a href="#">Saved Items<i class="fa fa-caret-down"></i></a></span>
                    <div class="h" class="dropdown-content">
                        <div class="o" class="up">
                            <div class="m"><i class="fa fa-bookmark-o fa-2x"></i>Saved Items</div>
                           <div class="line1"></div>
                            <p id="t">See all your saved items ›</p>
                            <div id="u"><i class="fa fa-times"></i></div>
                            
                        </div>
                        <div id="down">
                            <div class="down-first">
                                <p></p>
                                <h2 id="v">Looks like you don't have anything saved...</h2>
                                <p class="w">When you see something you like, hit "save" and we'll keep track of it here.</p>
                                <p class="w"><span style="color:blue">Sign in</span> or <span style="color:blue">create an account</span>  to see your stuff on all your devices.</p>
                            </div>
                            <div class="down-second">
                                <img class="x" src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png" alt="">
                            </div>
                            
                        </div>
                    </div>
                </div>
                



        </div>

     </div>
   
</div>
    `
}





export {navbar}