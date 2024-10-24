const civilizations = [
    {
        name: "الحضارة المصرية القديمة",
        description: "تعتبر واحدة من أقدم الحضارات في العالم، معروفة بأهراماتها وكتاباتها الهيروغليفية.",
        achievements: ["بناء الأهرامات", "اختراع الكتابة الهيروغليفية", "التقدم في الطب"]
    },
    {
        name: "الحضارة الإغريقية",
        description: "معروفة بالفلسفة، والرياضيات، والفن، وقد ساهمت في تطوير الديموقراطية.",
        achievements: ["فلسفة أرسطو", "أعمال هوميروس", "تأسيس الألعاب الأولمبية"]
    },
    {
        name: "الحضارة الرومانية",
        description: "معروفة بنظامها القانوني وعمارتها المذهلة.",
        achievements: ["بناء الكولوسيوم", "تطوير القانون الروماني", "توسيع الإمبراطورية"]
    },
    {
        name: "الحضارة الإسلامية",
        description: "قدمت إنجازات كبيرة في العلوم والفنون، وكان لها تأثير عميق على العالم.",
        achievements: ["تطوير الرياضيات", "الطب والفلسفة", "الفنون المعمارية المذهلة"]
    }
];

function displayCivilizations() {
    const container = document.getElementById('civilizations');
    civilizations.forEach(civ => {
        const civDiv = document.createElement('div');
        civDiv.className = 'civilization';
        civDiv.innerHTML = `
            <h2>${civ.name}</h2>
            <p>${civ.description}</p>
            <h3>إنجازات:</h3>
            <ul>
                ${civ.achievements.map(ach => `<li>${ach}</li>`).join('')}
            </ul>
        `;
        container.appendChild(civDiv);
    });
}

window.onload = displayCivilizations;
