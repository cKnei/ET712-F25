import "./SolarSystem.css";

export default function SolarSystem() {
    return (<div className="page-body">
        <h1 className="page-title">The Solar System</h1>
        <div className="page-content">
            <a title="CactiStaccingCrane, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Solar_System_true_color_(title_and_caption).jpg"><img alt="The solar system in true color and sizes, with captions added." src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Solar_System_true_color_(title_and_caption).jpg" /></a>
            <p>
                <blockquote>
                    The Solar System consists of the Sun and the bodies that orbit it (most prominently Earth), being a system of masses bound together by gravity.
                    The name comes from Sōl, the Latin name for the Sun.
                    It formed about 4.6 billion years ago when a dense region of a molecular cloud collapsed, creating the Sun and a protoplanetary disc from which the orbiting bodies assembled.
                    The fusion of hydrogen into helium inside the Sun's core releases energy, which is primarily emitted through its outer photosphere.
                    This creates a decreasing temperature gradient across the system. Over 99.86% of the Solar System's mass is located within the Sun.<br />
                </blockquote>
                <p class="attribution">Quoted from <a href="https://en.wikipedia.org/wiki/Solar_System">Wikipedia</a> — CC BY-SA 4.0.</p>
            </p>
        </div>
    </div>);
}