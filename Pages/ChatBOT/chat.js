document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) { 
        event.preventDefault(); 
        sendMessage();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const headbar = document.querySelector('.headbar');

    hamburger.addEventListener('click', function() {
        headbar.classList.toggle('show');
        hamburger.classList.toggle('active');
    });
});


function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user-message');
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot-message');
        document.getElementById('user-input').value = '';
    }
}

function addMessage(message, type) {
    const chatboxBody = document.getElementById('chatbox-body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = message;
    chatboxBody.appendChild(messageDiv);
    chatboxBody.scrollTop = chatboxBody.scrollHeight; 
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes('cardiovascular')) {
        return 'Cardiovascular diseases include conditions like coronary artery disease and heart failure. Symptoms can include chest pain, shortness of breath, swelling in the legs, and fatigue. Treatments often involve medications such as statins to lower cholesterol, ACE inhibitors like lisinopril to manage blood pressure, and anticoagulants like aspirin for certain conditions. Lifestyle changes like diet and exercise are also crucial for managing cardiovascular health.';
    } else if (input.includes('diabetes')) {
        return 'Diabetes, including both Type 1 and Type 2, is characterized by symptoms such as excessive thirst, frequent urination, fatigue, and blurred vision. Type 1 diabetes is often managed with insulin injections, while Type 2 diabetes can be controlled with oral hypoglycemics like metformin. Both types require dietary adjustments, regular blood glucose monitoring, and exercise to maintain blood sugar levels.';
    } else if (input.includes('asthma')) {
        return 'Asthma is a chronic respiratory condition causing symptoms such as shortness of breath, wheezing, coughing, and chest tightness. Treatments include inhaled corticosteroids like fluticasone to reduce inflammation and bronchodilators to relieve symptoms. Avoiding known triggers and monitoring symptoms are important for effective management.';
    } else if (input.includes('covid-19')) {
        return 'COVID-19 presents with symptoms such as fever, cough, shortness of breath, and fatigue. Treatment involves antiviral medications for severe cases and supportive care including rest and hydration. Monitoring symptoms and seeking medical attention for severe respiratory distress is important.';
    } else if (input.includes('cancer')) {
        return 'Cancer symptoms vary depending on the type and location but may include lumps, persistent cough, and weight loss. Treatments depend on the type of cancer and can include surgery to remove tumors, chemotherapy, and targeted therapies like trastuzumab for specific cancer types. Regular screenings and early detection are critical for effective treatment.';
    } else if (input.includes('depression')) {
        return 'Depression is characterized by symptoms such as persistent sadness, loss of interest in activities, fatigue, and changes in appetite or sleep patterns. Treatment often involves antidepressants like SSRIs, such as sertraline, and psychotherapy. Lifestyle changes, including regular exercise and a healthy diet, are also recommended.';
    } else if (input.includes('anxiety')) {
        return 'Anxiety disorders involve excessive worry, restlessness, rapid heartbeat, and difficulty concentrating. Treatments include anti-anxiety medications like benzodiazepines for short-term relief or SSRIs for longer-term management. Cognitive-behavioral therapy (CBT) and relaxation techniques can also be beneficial.';
    } else if (input.includes('ibs')) {
        return 'Irritable Bowel Syndrome (IBS) causes symptoms like abdominal pain, bloating, diarrhea, or constipation. Management includes dietary adjustments, fiber supplements, and medications like antispasmodics to relieve symptoms. Stress management techniques can also be helpful.';
    } else if (input.includes('ulcer')) {
        return 'Peptic ulcers cause symptoms such as abdominal pain, nausea, indigestion, and loss of appetite. Treatment typically involves proton pump inhibitors like omeprazole to reduce stomach acid and antibiotics if caused by an H. pylori infection. Antacids and lifestyle changes, such as avoiding spicy foods and reducing stress, are also recommended.';
    } else if (input.includes('arthritis')) {
        return 'Arthritis includes conditions like osteoarthritis and rheumatoid arthritis, causing joint pain, swelling, and stiffness. Treatments involve pain relievers and anti-inflammatory medications such as NSAIDs, disease-modifying antirheumatic drugs (DMARDs) like methotrexate for rheumatoid arthritis, and physical therapy to improve joint function.';
    } else if (input.includes('lupus')) {
        return 'Systemic Lupus Erythematosus (SLE) presents with symptoms like fatigue, joint pain, skin rashes, and fever. Treatments include antimalarials like hydroxychloroquine to manage symptoms and corticosteroids like prednisone for inflammation. Immunosuppressive drugs may be used for severe cases.';
    } else if (input.includes('flu') || input.includes('influenza')) {
        return 'Influenza, or the flu, causes symptoms such as fever, cough, sore throat, muscle aches, and fatigue. Treatment includes antiviral medications like oseltamivir, over-the-counter medications for symptom relief, and plenty of rest and hydration.';
    } else if (input.includes('cold')) {
        return 'The common cold presents with symptoms like a runny or stuffy nose, sore throat, cough, and mild fever. Treatment focuses on symptom relief with over-the-counter medications such as decongestants and cough suppressants, along with rest and hydration.';
    } else if (input.includes('eczema')) {
        return 'Eczema is characterized by itchy, inflamed skin, red rashes, and dry patches. Treatments include topical corticosteroids to reduce inflammation, moisturizers and emollients to hydrate the skin, and avoiding triggers such as certain soaps or fabrics.';
    } else if (input.includes('psoriasis')) {
        return 'Psoriasis causes symptoms like red patches of skin covered with thick, silvery scales, itching, and discomfort. Treatment includes topical treatments like corticosteroids or calcipotriene, phototherapy, and systemic medications for severe cases.';
    } else if (input.includes('osteoarthritis')) {
        return 'Osteoarthritis causes joint pain and stiffness, reduced range of motion, and swelling. Treatments involve pain relievers and anti-inflammatory medications, physical therapy to strengthen muscles around the joints, and joint injections or surgery for severe cases.';
    } else if (input.includes('osteoporosis')) {
        return 'Osteoporosis leads to bone fragility, increased risk of fractures, and loss of height. Treatments include medications like bisphosphonates such as alendronate to strengthen bones, calcium and vitamin D supplements, and weight-bearing exercises to maintain bone density.';
    } else if (input.includes('cystic fibrosis')) {
        return 'Cystic Fibrosis presents with symptoms like persistent cough with mucus, difficulty breathing, and digestive problems. Treatment involves medications to thin mucus and improve lung function, enzyme supplements for digestion, and physiotherapy to clear mucus from the lungs.';
    } else if (input.includes('down syndrome')) {
        return 'Down Syndrome is characterized by distinctive facial features, developmental delays, and intellectual disability. Management includes supportive therapies such as physical and speech therapy, early intervention programs, and regular medical care to address associated health issues.';
    } else if (input.includes('headache')) {
        return 'Headaches can vary in type, including tension headaches, migraines, and cluster headaches. Symptoms often include dull, throbbing pain, sensitivity to light, or nausea. Treatments include over-the-counter pain relievers such as ibuprofen, lifestyle adjustments to reduce stress, and identifying and avoiding headache triggers.';
    } else if (input.includes('migraine')) {
        return 'Migraines are characterized by severe, throbbing pain, often on one side of the head, along with symptoms like nausea, vomiting, and sensitivity to light and sound. Treatment includes medications like triptans for acute relief, and preventive medications such as beta-blockers or anticonvulsants. Identifying triggers and managing stress are also important.';
    } else if (input.includes('sinusitis')) {
        return 'Sinusitis causes symptoms such as facial pain, nasal congestion, and discharge. Treatment typically includes nasal decongestants, saline nasal sprays, and antibiotics if a bacterial infection is present. Managing allergies and avoiding irritants can also help reduce symptoms.';
    } else if (input.includes('fatigue')) {
        return 'Fatigue can result from various causes, including sleep disorders, chronic illnesses, or stress. Treatment involves addressing the underlying cause, which may include improving sleep hygiene, managing chronic conditions, and reducing stress through lifestyle changes and therapy.';
    } else if (input.includes('backache')) {
        return 'Backaches can be caused by muscle strain, poor posture, or underlying conditions such as herniated discs. Treatments include pain relievers like acetaminophen, physical therapy to strengthen back muscles, and lifestyle changes like improving posture and ergonomic adjustments at work.';
    } else {
        return 'Sorry, I don’t have information on that topic. Please ask about common diseases or symptoms.';
    }
}
