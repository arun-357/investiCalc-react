export default function User({ onChange, userInput }) {

      return <>
            <section id='user-input'>
                  <div className="input-group">
                        <p>
                              <label>Initial Investment</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.initialInvestment}
                                    onChange={(data) => onChange('initialInvestment', 
                                    data.target.value)}
                              />
                        </p>
                        <p>
                              <label>Annual Investment</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.annualInvestment}
                                    onChange={(data) => onChange('annualInvestment', 
                                    data.target.value)}
                              />
                        </p>
                        
                  </div>
                  <div className="input-group">
                        <p>
                              <label>Expected Return</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.expectedReturn}
                                    onChange={(data) => onChange('expectedReturn', 
                                    data.target.value)}
                              />
                        </p>
                        <p>
                              <label>Duration</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.duration}
                                    onChange={(data) => onChange('duration', 
                                    data.target.value)}
                              />
                        </p>
                        
                  </div>
            </section>
      </>
}