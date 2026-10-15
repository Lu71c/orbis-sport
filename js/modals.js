/* ==========================================================================
   MICHELANGELO SPORT - SPA ENGINE (MODALS & LOGIC)
   ========================================================================== */

const modalData = {
    'palestra': {
        title: "💪 AREA FITNESS & PESI",
        subtitle: "Spazi ampi, attrezzature biomeccaniche d'avanguardia.",
        content: `
            <!-- Banner Fotografico Principale -->
            <img src="img/palestra-principale.jpg" alt="Area Palestra e Pesi" class="modal-banner-img">

            <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--primary);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏋️‍♂️</div>
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Sala Pesi (600mq)</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Area manubri fino a 50kg, rack multipli e pedane olimpiche per il powerlifting.</p>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--primary);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏃‍♀️</div>
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Cardio Fitness</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Tapis roulant ed ellittiche connesse. Monitora i tuoi parametri in tempo reale.</p>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--primary);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎵</div>
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Corsi Musicali</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">40+ ore/settimana di Pilates, Yoga, Spinning e Functional Training.</p>
                </div>
            </div>

            <h3 style="color: white; font-size: 1.2rem; margin-bottom: 1rem; text-align: center;">SCEGLI IL TUO PIANO</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
                
                <!-- Trimestrale -->
                <div style="background: rgba(4, 120, 87, 0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem; text-align: center;">
                    <h4 style="color: white; margin-bottom: 0.5rem; text-transform: uppercase;">Trimestrale Open</h4>
                    <div style="font-size: 2.5rem; font-weight: 800; color: white;">48€<span style="font-size: 1rem; color: var(--text-muted); font-weight: normal;">/mese</span></div>
                    <p style="font-size: 0.8rem; color: var(--accent); margin-bottom: 1rem;">Risparmi 21€ sul trimestre</p>
                    <ul style="list-style: none; padding: 0; text-align: left; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.8;">
                        <li>✓ Accesso illimitato sala pesi</li>
                        <li>✓ 2 Corsi musicali a scelta</li>
                    </ul>
                    <button onclick="simulateCheckout('Trimestrale Open', '144.00€')" style="width: 100%; padding: 12px; background: #ffc439; color: #003087; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">Paga con PayPal</button>
                </div>

                <!-- Annuale (Featured) -->
                <div style="background: rgba(4, 120, 87, 0.8); border: 2px solid var(--accent); border-radius: 16px; padding: 1.5rem; text-align: center; position: relative;">
                    <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: #022c22; font-size: 0.75rem; font-weight: bold; padding: 4px 12px; border-radius: 12px;">PIÙ CONVENIENTE</div>
                    <h4 style="color: white; margin-bottom: 0.5rem; text-transform: uppercase;">Annuale Open</h4>
                    <div style="font-size: 2.8rem; font-weight: 800; color: white;">39€<span style="font-size: 1rem; color: var(--text-muted); font-weight: normal;">/mese</span></div>
                    <p style="font-size: 0.8rem; color: var(--accent); margin-bottom: 1rem;">Risparmi 192€ all'anno</p>
                    <ul style="list-style: none; padding: 0; text-align: left; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.8;">
                        <li>✓ Accesso ALL INCLUSIVE</li>
                        <li>✓ Tutti i corsi di gruppo</li>
                        <li>✓ 2 Sessioni Personal Trainer</li>
                    </ul>
                    <button onclick="simulateCheckout('Annuale Open', '468.00€')" style="width: 100%; padding: 12px; background: #ffc439; color: #003087; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">Paga con PayPal</button>
                </div>

                <!-- Mensile -->
                <div style="background: rgba(4, 120, 87, 0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem; text-align: center;">
                    <h4 style="color: white; margin-bottom: 0.5rem; text-transform: uppercase;">Mensile Open</h4>
                    <div style="font-size: 2.5rem; font-weight: 800; color: white;">55€<span style="font-size: 1rem; color: var(--text-muted); font-weight: normal;">/mese</span></div>
                    <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">Nessun vincolo di rinnovo</p>
                    <ul style="list-style: none; padding: 0; text-align: left; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.8;">
                        <li>✓ Accesso illimitato sala pesi</li>
                        <li>✓ Scheda allenamento iniziale</li>
                    </ul>
                    <button onclick="simulateCheckout('Mensile Open', '55.00€')" style="width: 100%; padding: 12px; background: #ffc439; color: #003087; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">Paga con PayPal</button>
                </div>
            </div>
        `
    },
    'padel': {
        title: "🎾 CAMPI DA PADEL",
        subtitle: "Strutture panoramiche con manto ufficiale WPT.",
        content: `
            <!-- Banner Fotografico Principale -->
            <img src="img/padel-principale.jpg" alt="Campi da Padel" class="modal-banner-img">

            <div id="padel-step-1">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <h3 id="padel-data-oggi" style="color: var(--accent); font-size: 1.2rem;">📅 Oggi</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Tocca uno slot orario libero per prenotare.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px; max-width: 600px; margin: 0 auto;">
                    <!-- Slot Occupati -->
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 15px 10px; border-radius: 8px; text-align: center; opacity: 0.6;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">09:00</div>
                        <div style="font-size: 0.7rem; color: #ef4444; text-transform: uppercase;">Occupato</div>
                    </div>
                    <!-- Slot Liberi -->
                    <div onclick="openCoachSelection('10:30')" style="background: rgba(34, 197, 94, 0.15); border: 1px solid var(--primary); padding: 15px 10px; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.2s;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">10:30</div>
                        <div style="font-size: 0.7rem; color: var(--primary); text-transform: uppercase; font-weight: bold;">Libero</div>
                    </div>
                    <div onclick="openCoachSelection('12:00')" style="background: rgba(34, 197, 94, 0.15); border: 1px solid var(--primary); padding: 15px 10px; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.2s;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">12:00</div>
                        <div style="font-size: 0.7rem; color: var(--primary); text-transform: uppercase; font-weight: bold;">Libero</div>
                    </div>
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 15px 10px; border-radius: 8px; text-align: center; opacity: 0.6;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">15:30</div>
                        <div style="font-size: 0.7rem; color: #ef4444; text-transform: uppercase;">Occupato</div>
                    </div>
                    <div onclick="openCoachSelection('17:00')" style="background: rgba(34, 197, 94, 0.15); border: 1px solid var(--primary); padding: 15px 10px; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.2s;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">17:00</div>
                        <div style="font-size: 0.7rem; color: var(--primary); text-transform: uppercase; font-weight: bold;">Libero</div>
                    </div>
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 15px 10px; border-radius: 8px; text-align: center; opacity: 0.6;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">18:30</div>
                        <div style="font-size: 0.7rem; color: #ef4444; text-transform: uppercase;">Occupato</div>
                    </div>
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 15px 10px; border-radius: 8px; text-align: center; opacity: 0.6;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">20:00</div>
                        <div style="font-size: 0.7rem; color: #ef4444; text-transform: uppercase;">Occupato</div>
                    </div>
                    <div onclick="openCoachSelection('21:30')" style="background: rgba(34, 197, 94, 0.15); border: 1px solid var(--primary); padding: 15px 10px; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.2s;">
                        <div style="font-size: 1.2rem; font-weight: bold; color: white;">21:30</div>
                        <div style="font-size: 0.7rem; color: var(--primary); text-transform: uppercase; font-weight: bold;">Libero</div>
                    </div>
                </div>
            </div>

            <!-- Flusso Step 2 (Scelta Maestro) -->
            <div id="padel-step-2" style="display: none; text-align: center;">
                <button onclick="backToPadelSlots()" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; margin-bottom: 1rem; font-size: 0.9rem;">← Torna agli orari</button>
                <h3 style="color: white; margin-bottom: 0.5rem;">Slot delle <span id="selected-padel-time" style="color: var(--primary);"></span></h3>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Seleziona un maestro per la sessione o prenota il campo libero.</p>
                
                <div style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: 0 auto;">
                    <button onclick="prenotaPadel('Senza Maestro')" style="padding: 12px; background: rgba(2, 44, 34, 0.8); border: 1px solid var(--primary); color: white; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 600;">
                        <span>🔓</span> Campo Libero (Nessun Maestro)
                    </button>
                    <button onclick="prenotaPadel('King')" style="padding: 12px; background: rgba(2, 44, 34, 0.8); border: 1px solid var(--accent); color: white; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 600;">
                        <span>🥇</span> Maestro Marco "King"
                    </button>
                    <button onclick="prenotaPadel('Swing')" style="padding: 12px; background: rgba(2, 44, 34, 0.8); border: 1px solid var(--accent); color: white; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 600;">
                        <span>🎾</span> Maestra Elena "Swing"
                    </button>
                    <button onclick="prenotaPadel('Flash')" style="padding: 12px; background: rgba(2, 44, 34, 0.8); border: 1px solid var(--accent); color: white; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 600;">
                        <span>⚡</span> Maestro Alex "Flash"
                    </button>
                    <button onclick="prenotaPadel('Prof')" style="padding: 12px; background: rgba(2, 44, 34, 0.8); border: 1px solid var(--accent); color: white; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 600;">
                        <span>🎓</span> Maestra Giulia "Prof" (Kids)
                    </button>
                </div>
            </div>
        `
    },
    'piscina': {
        title: "🏊‍♂️ PISCINA OLIMPIONICA",
        subtitle: "Allenamento, fitness in acqua e relax a bordo vasca.",
        content: `
            <!-- Banner Fotografico Principale -->
            <img src="img/piscina-principale.jpg" alt="Piscina Centro Sportivo" class="modal-banner-img">

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-top: 3px solid #3a7bd5;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏊‍♂️</div>
                    <h4 style="color: white; margin-bottom: 0.5rem;">Vasca 50m</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Depurazione a sale, corsie per velocità differenziate, acqua a temperatura controllata.</p>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-top: 3px solid #3a7bd5;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌊</div>
                    <h4 style="color: white; margin-bottom: 0.5rem;">Acquagym</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Fitness musicale in vasca dedicata. Ideale per tonificare senza impatto sulle articolazioni.</p>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-top: 3px solid #3a7bd5;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">👶</div>
                    <h4 style="color: white; margin-bottom: 0.5rem;">Scuola Kids</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Corsi per bambini 3-12 anni con istruttori federali FIN. Massima sicurezza.</p>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-top: 3px solid #3a7bd5;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">☀️</div>
                    <h4 style="color: white; margin-bottom: 0.5rem;">Solarium</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Gradinata relax con lettini e ombrelloni per rigenerarsi dopo l'allenamento.</p>
                </div>
            </div>
        `
    },
    'calcio': {
        title: "⚽ IL GRANDE CALCIO",
        subtitle: "Campi a 5, 8 e 11 con erba sintetica e naturale.",
        content: `
            <!-- Banner Fotografico Principale -->
            <img src="img/calcio-principale.jpg" alt="Campi da Calcio Michelangelo" class="modal-banner-img">

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.2rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem;">👟</div>
                    <h4 style="color: var(--primary);">Calcio a 5</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">3 campi coperti/scoperti</span>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.2rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem;">🏃‍♂️</div>
                    <h4 style="color: var(--primary);">Calcio a 8</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">2 campi con manto drenante</span>
                </div>
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.2rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem;">🏟️</div>
                    <h4 style="color: var(--primary);">Calcio a 11</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">Erba naturale e tribune</span>
                </div>
            </div>

            <div style="background: rgba(4, 120, 87, 0.35); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem;">
                <h3 style="color: var(--accent); text-transform: uppercase; margin-bottom: 1rem; text-align: center;">Iscrivi la tua Squadra al Torneo</h3>
                
                <form onsubmit="submitCalcioForm(event)" style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: 0 auto;">
                    <input type="text" id="team-name" placeholder="Nome della Squadra" required style="padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(2, 44, 34, 0.7); color: white;">
                    <input type="text" id="captain" placeholder="Nome Capitano" required style="padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(2, 44, 34, 0.7); color: white;">
                    
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <input type="tel" id="phone" placeholder="Telefono" required style="flex: 1; min-width: 180px; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(2, 44, 34, 0.7); color: white;">
                        <select id="tournament-type" required style="flex: 1; min-width: 180px; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(2, 44, 34, 0.7); color: white;">
                            <option value="" disabled selected>Scegli Torneo...</option>
                            <option value="C5 Estivo">Torneo Estivo (Calcio a 5)</option>
                            <option value="C8 Apertura">Campionato Apertura (Calcio a 8)</option>
                        </select>
                    </div>
                    
                    <button type="submit" style="background: var(--primary); color: #022c22; border: none; padding: 14px; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: background 0.3s; margin-top: 0.5rem;">GENERA PASS ISCRIZIONE</button>
                </form>
            </div>
        `
    },
    'orari-mappa': {
        title: "📍 CONTATTI E INFO",
        subtitle: "Siamo aperti 7 giorni su 7.",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: rgba(2, 44, 34, 0.5); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--primary);">
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">Michelangelo Sport</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">📍 Piazzale Michelangelo, 50125 Firenze (FI)</p>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">📞 +39 055 1234567</p>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">✉️ info@michelangelosport.it</p>
                    
                    <h4 style="color: white; margin-bottom: 0.5rem; font-size: 0.9rem;">Orari di Apertura</h4>
                    <p style="color: var(--accent); font-size: 0.85rem;">Lun - Sab: 06:30 - 23:00</p>
                    <p style="color: var(--accent); font-size: 0.85rem;">Domenica: 08:00 - 20:00</p>
                </div>
                
                <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); min-height: 250px;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.564478144087!2d11.262529815494236!3d43.76295597911762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54054a3dc4fb%3A0xb3fc4902dcfe8650!2sPiazzale%20Michelangelo!5e0!3m2!1sit!2sit!4v1689255000000!5m2!1sit!2sit" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        `
    }
};

/* ==========================================================================
   FUNZIONI DI SISTEMA (ROUTING E MODALI)
   ========================================================================== */

function openModal(hash) {
    const data = modalData[hash];
    if (!data) return;

    const overlay = document.getElementById('modal-overlay');
    const dynamicBody = document.getElementById('modal-dynamic-body');
    
    // Aggiornamento bottoni dock
    document.querySelectorAll('.dock-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.dock-btn[href="#${hash}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Iniezione HTML Base
    dynamicBody.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; gap: 10px;">
            <div>
                <h2 style="font-size: 1.8rem; color: var(--primary); text-transform: uppercase;">${data.title}</h2>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${data.subtitle}</p>
            </div>
            <button onclick="closeModal()" style="background: rgba(255,255,255,0.1); border: none; color: white; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">✖</button>
        </div>
        <div class="modal-inner-content">
            ${data.content}
        </div>
    `;

    // Aggiornamento data corrente dinamica nel modale Padel
    if (hash === 'padel') {
        const dateElement = document.getElementById('padel-data-oggi');
        if (dateElement) {
            const oggi = new Date();
            const dataFormattata = oggi.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });
            dateElement.innerHTML = `📅 Oggi: ${dataFormattata.charAt(0).toUpperCase() + dataFormattata.slice(1)}`;
        }
    }

    overlay.classList.remove('hidden');
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('hidden');
    history.pushState("", document.title, window.location.pathname + window.location.search);
    
    document.querySelectorAll('.dock-btn').forEach(btn => btn.classList.remove('active'));
    const homeBtn = document.getElementById('btn-home');
    if (homeBtn) homeBtn.classList.add('active');
}

function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && modalData[hash]) {
        openModal(hash);
    } else {
        closeModal();
    }
}

// Inizializzazione Listeners
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modal-overlay');
    
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    const homeBtn = document.getElementById('btn-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
});


/* ==========================================================================
   FUNZIONALITÀ SIMULATE (HIGH-DEF)
   ========================================================================== */

// 1. PADEL: Flusso Prenotazione a 2 Step
let selectedPadelTime = '';

function openCoachSelection(time) {
    selectedPadelTime = time;
    const step1 = document.getElementById('padel-step-1');
    const step2 = document.getElementById('padel-step-2');
    const timeDisplay = document.getElementById('selected-padel-time');
    
    if (step1 && step2 && timeDisplay) {
        step1.style.display = 'none';
        step2.style.display = 'block';
        timeDisplay.innerText = time;
    }
}

function backToPadelSlots() {
    const step1 = document.getElementById('padel-step-1');
    const step2 = document.getElementById('padel-step-2');
    if (step1 && step2) {
        step1.style.display = 'block';
        step2.style.display = 'none';
    }
}

function prenotaPadel(coach) {
    const numeroTelefono = "390551234567";
    const msg = coach === 'Senza Maestro' 
        ? `Ciao! Vorrei prenotare il campo libero da Padel per oggi alle ${selectedPadelTime}.`
        : `Ciao! Vorrei prenotare il campo da Padel per oggi alle ${selectedPadelTime} con il maestro '${coach}'.`;
    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(msg)}`, '_blank');
    closeModal();
}


// 2. PALESTRA: Fake Checkout Dinamico
function simulateCheckout(planName, price) {
    const container = document.querySelector('.modal-inner-content');
    if (!container) return;
    
    container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4rem 0; min-height: 300px;">
            <div style="font-size: 3rem; animation: pulse 1s infinite;">⏳</div>
            <h3 style="color: var(--primary); margin-top: 1.5rem;">Connessione a PayPal...</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Creazione transazione sicura in corso.</p>
        </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `@keyframes pulse { 0% { opacity: 0.5; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1.05); } 100% { opacity: 0.5; transform: scale(0.95); } }`;
    document.head.appendChild(style);

    setTimeout(() => {
        const receiptId = 'MS-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h2 style="color: var(--primary); margin-bottom: 0.5rem;">Pagamento Approvato</h2>
                <p style="color: white; margin-bottom: 2rem;">Benvenuto nel team Michelangelo Sport!</p>
                
                <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--glass-border); border-radius: 12px; padding: 1.5rem; text-align: left; max-width: 320px; margin: 0 auto 2rem auto;">
                    <div style="margin-bottom: 0.8rem;"><span style="color: var(--text-muted); font-size: 0.8rem;">PIANO SCELTO:</span><br><strong style="color: white;">${planName}</strong></div>
                    <div style="margin-bottom: 0.8rem;"><span style="color: var(--text-muted); font-size: 0.8rem;">IMPORTO TRANSAZIONE:</span><br><strong style="color: white;">${price}</strong></div>
                    <div><span style="color: var(--text-muted); font-size: 0.8rem;">ID RICEVUTA:</span><br><span style="font-family: monospace; color: var(--accent);">${receiptId}</span></div>
                </div>
                
                <button onclick="closeModal()" style="background: var(--primary); color: #022c22; border: none; padding: 12px 28px; border-radius: 8px; font-weight: bold; cursor: pointer;">Torna alla Home</button>
            </div>
        `;
    }, 1800);
}


// 3. CALCIO: Form validation e generazione PASS
function submitCalcioForm(event) {
    event.preventDefault();
    const teamInput = document.getElementById('team-name');
    const tournamentInput = document.getElementById('tournament-type');
    
    if (!teamInput || !tournamentInput) return;
    
    const team = teamInput.value;
    const tournament = tournamentInput.value;
    const code = 'CUP-' + Math.floor(1000 + Math.random() * 9000);
    
    const container = document.querySelector('.modal-inner-content');
    if (!container) return;
    
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🎫</div>
            <h2 style="color: var(--accent); margin-bottom: 0.5rem;">Pass Ufficiale Generato</h2>
            <p style="color: white;">La pre-iscrizione per la squadra <strong>${team}</strong> al <strong>${tournament}</strong> è confermata.</p>
            
            <div style="margin: 2rem auto; background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 12px; border: 2px dashed var(--accent); display: inline-block;">
                <p style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.5rem;">Codice Squadra</p>
                <h3 style="font-size: 2.5rem; letter-spacing: 4px; color: var(--primary); font-family: monospace;">${code}</h3>
            </div>
            
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Invia ora un messaggio alla segreteria per convalidare il pass e bloccare il posto.</p>
            
            <button onclick="window.open('https://wa.me/390551234567?text=' + encodeURIComponent('Ciao! Ho pre-iscritto la squadra ' + '${team}' + ' al torneo. Codice Pass: ' + '${code}'), '_blank')" style="background: #25D366; color: white; padding: 12px 24px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                💬 Invia Pass su WhatsApp
            </button>
        </div>
    `;
}
