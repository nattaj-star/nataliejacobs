import "./cv.css"

export function CV() {

    const soloPresentations = <div className="cv-section">
        <div className="section-header">SOLO PRESENTATIONS</div>
        <div className="section-subheader">✧ 2024</div>
        <div className="item">
            <a href="https://utaartistspace.com/viewingrooms/herald-with-the-voice-of-longing/">
                <i>Herald with the Voice of Longing,</i>
            </a>{" "}
            UTA Artist's Space
        </div></div>

    const selectedGroupExhibitions = <div className="cv-section">
        <div className="section-header">SELECTED GROUP EXHIBITIONS</div>
        <div className="section-subheader">✧ 2025</div>
        <div className="item">
            <i>Just The House of a Body</i>, Field Projects Gallery, New York, NY
        </div>
        <div className="item">
            <i>Ekoda</i>, Ekoda Gallery, New York, NY
        </div>
        <div className="section-subheader">✧ 2024</div>
        <div className="item">
            <i>Social Geographies</i>, Kunstraum Gallery, Brooklyn, NY
        </div>
        <div className="section-subheader">✧ 2023</div>
        <div className="item">
            <i>Winter Exhibition</i>, KinoSaito, Verplanck, NY
        </div>
        <div className="item">
            <i>Blood or Bond</i>, Plaxall Gallery, Queens, NY
        </div>
        <div className="item">
            <i>The Table</i>, Level Gallery, Brooklyn, NY
        </div>
        <div className="section-subheader">✧ 2022</div>
        <div className="item">
            <i>The Other Art Fair</i>, Agger Fish Building, Brooklyn, NY
        </div>
        <div className="item">SVA Flatiron Gallery, New York, NY</div>
        <div className="item">
            <i>The House Down Project</i>, Rogue Space Gallery, New York, NY
        </div>
        <div className="section-subheader">✧ 2021</div>
        <div className="item">
            <i>Thesis Show</i>, Tang Teaching Museum, Saratoga Springs, NY
        </div>
        <div className="item">
            <i>2021 Juried Exhibition</i>, Schick Gallery at Skidmore College, Saratoga Springs, NY
        </div>
        <div className="section-subheader">✧ 2019</div>
        <div className="item">
            Jules Maidoff Gallery at SACI, Florence, Italy
        </div></div>

    const residencies = <div className="cv-section">
        <div className="section-header">RESIDENCIES</div>
        <div className="section-subheader">✧ 2023</div>
        <div className="item">Kunstraum Artist Residency, Brooklyn, NY</div>
        <div className="item">
            ChaNorth Artist Residency, Pine Plains, NY
        </div>
        <div className="section-subheader">✧ 2022</div>
        <div className="item">
            Studio Residency in Painting, School of Visual Arts, NY, NY
        </div>
    </div>

    const teaching = <div className="cv-section">
        <div className="section-header">TEACHING</div>
        <div className="section-subheader">✧ 2022</div>
        <div className="item">
            Visiting Artist, Loyola School, New York, NY
        </div>
    </div>

    const honors = <div className="cv-section">
        <div className="section-header">HONORS</div>
        <div className="section-subheader">✧ 2021</div>
        <div className="item">Honors, Tang Museum Exhibition</div>
        <div className="item">
            Fiction Writing Honors, Skidmore College
        </div>
        <div className="section-subheader">✧ 2020</div>
        <div className="item">
            SEE BEYOND Award for Promising Student Artist, Skidmore College
        </div>
        <div className="section-subheader">✧ 2019</div>
        <div className="item">
            Sarah Bennett Fiction Writing Award, Skidmore College
        </div>
    </div>

    const education = <div className="cv-section">
        <div className="section-header">EDUCATION</div>
        <div className="section-subheader">✧ 2021</div>
        <div className="item">
            B.S Studio Arts &amp; B.A English, <i>cum laude</i>, Skidmore College. Saratoga Springs, NY</div>
        <div className="section-subheader">✧ 2019</div>
        <div className="item">
            Studio Arts College International. Florence, Italy
        </div>
    </div>

    return (
        <div className="tabContentInner">
            {soloPresentations}
            {selectedGroupExhibitions}
            {residencies}
            {teaching}
            {honors}
            {education}
        </div >

    );
}