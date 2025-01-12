import { use } from "react"
import { useState } from "react"

export default function User() {
      const [userInput, setUserInput] = useState({
            initialInvestment: 10000,
            annualInvestment: 1000,
            expectedReturn: 6,
            duration: 10
      });

      function handleChange(identifier, value) {
            setUserInput(prev => {
                  return { ...prev, [identifier]: value };
            });
      }

      return <>
            <section id='user-input'>
                  <div className="input-group">
                        <p>
                              <label>Initial Investment</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.initialInvestment}
                                    onChange={(data) => handleChange('initialInvestment', 
                                    data.target.value)}
                              />
                        </p>
                        <p>
                              <label>Annual Investment</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.annualInvestment}
                                    onChange={(data) => handleChange('annualInvestment', 
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
                                    onChange={(data) => handleChange('expectedReturn', 
                                    data.target.value)}
                              />
                        </p>
                        <p>
                              <label>Duration</label>
                              <input 
                                    type='number' 
                                    required 
                                    value={userInput.duration}
                                    onChange={(data) => handleChange('duration', 
                                    data.target.value)}
                              />
                        </p>
                        
                  </div>
            </section>
      </>
}