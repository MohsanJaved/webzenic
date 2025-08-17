
const Value1 = () => {

    const chooseContent = [
        {iconclass:'bi bi-people', title:'Results That Speak', content:'From higher search rankings to boosted sales, we focus on performance that drives your bottom line. Every click, lead, and conversion is tracked for maximum ROI.'},
        {iconclass:'bi bi-pie-chart', title:'Marketing Made Simple', content:'No confusing, no overcomplication — just clear strategies. We break down complex digital marketing into easy steps so you can see exactly how your business grows.'},
        {iconclass:'bi bi-cloudy', title:'Your Success, Our Priority', content:'We treat your business like our own — your wins are our wins. We work closely alongside you every step of the way to help you achieve your business goals.'},
        {iconclass:'bi bi-check-circle', title:'Clear Communication', content:'You’ll always know what we’re doing, why we’re doing it, and how it’s working. We take time to understand your business, goals, and audience before creating any strategy.'},
      ]; 

    return (
        <section className="value-section fix section-padding section-bg pt-0">
        <div className="value-shape">
            <img src="/assets/img/value-shape.png" alt="img" />
        </div>
        <div className="value-shape-2">
            <img src="/assets/img/value-shape-2.png" alt="img" />
        </div>
        <div className="container">
            <div className="section-title text-center wow fadeInUp" data-wow-delay=".3s">
                <h2>Why Clients Trust Us</h2>
            </div>
            <div className="row">
            {chooseContent.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="value-box-items">
                        <div className="icon">
                           <i className={item.iconclass}></i>
                        </div>
                        <div className="content">
                            <h3>{item.title}</h3>
                            <p>
                            {item.content}
                            </p>
                        </div>
                    </div>
                </div>
))}


            </div>
        </div>
    </section>
    );
};

export default Value1;