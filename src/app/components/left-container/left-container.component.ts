import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent {

  constructor(private http: HttpClient) { }

  placeholder1: string = 'Software Equipement and Subscriptions ($)';
  text: string = ''
  placeholder2: string = 'Certifications ($)';
  placeholder3: string = 'Conferences and Workshops ($)';
  placeholder4: string = 'School Fees ($)';
  userInput1: any;
  userInput2: any;
  userInput3: any;
  userInput4: any;
  aiResponse: string = '';
  

  public buttonClicked(){
    console.log(this.userInput1)
    if (this.userInput1 != undefined && this.userInput2 != undefined && this.userInput3 != undefined && this.userInput4 != undefined)
    {
      this.text = 'Hello! It\'s great that you\'re looking for financial resources to help with your budgeting and saving as a woman in tech. Here\'s a plan that can assist you in managing your expenses effectively:\n\n1. Certification Expenses ('+this.userInput2+'):\n\nScholarships and Grants: Many organizations offer scholarships and grants specifically for women in tech. Check out resources like the Anita Borg Institute for Women in Technology, Women Techmakers, and local tech organizations for opportunities.\nOnline Learning Platforms: Consider using online platforms like Coursera, edX, or LinkedIn Learning, which often offer financial aid and scholarships for certification courses.\nEmployer Support: If you\'re currently employed, ask your employer if they offer financial assistance for certifications related to your job.\n\n2. Software Equipment and Subscriptions ('+this.userInput1+'):\n\nOpen Source Software: Explore open-source alternatives to expensive software. For instance, you can use GIMP instead of Adobe Photoshop or LibreOffice instead of Microsoft Office.\nEducational Licenses: Some software providers offer discounted licenses for students or educators. Check if you qualify for such discounts.\nSubscription Sharing: If possible, share subscription costs with colleagues or friends who use the same software. This can significantly reduce expenses.\n\n3. Conferences and Workshops ('+this.userInput3+'):\n\nTech Conferences Scholarships: Many tech conferences offer scholarships or reduced fees for underrepresented groups in tech. Research conferences in your field and check their websites for scholarship opportunities.\nVirtual Conferences: Consider attending virtual conferences to save on travel and accommodation costs.\nProfessional Associations: Joining a professional tech association may provide access to networking events and workshops at a reduced cost.\n\n4. School Fees ('+this.userInput4+'):\n\nScholarships and Financial Aid: Look for scholarships and financial aid programs offered by your school, as well as external scholarships for women in tech.\nPart-Time Work: If possible, consider part-time work or freelance opportunities to supplement your income while studying.\nPayment Plans: Inquire with your school about flexible payment plans that allow you to spread out your tuition payments.\n\nAdditional Tips for Saving Money:\n\nBudgeting Apps: Use budgeting apps like Mint or YNAB (You Need A Budget) to track your expenses and set financial goals.\nEmergency Fund: Aim to build an emergency fund to cover unexpected expenses and reduce financial stress.\nNetworking: Network within your tech community to learn about additional resources and opportunities for financial support.\n\nRemember to regularly review and adjust your budget as needed to ensure you\'re on track to meet your financial goals. Saving money and managing expenses effectively are essential skills for building financial security in your tech career. Good luck!';

      
      
      
      
      
      
      //Here are some resources for women in tech that can help optimize your budget! \n' + 'For ' + this.userInput1 +'$ in software subscriptions, there programs that you can apply for that give women scholarships for them. \n' + 'Spending '+ this.userInput2 + '$ for professional growth, there are multiple clubs or organization you can become a member of to attend workshops, conferences and opportunities at a reduced cost. \n' + 'Since' + this.userInput3 +  '$ is quite a lot, for conferences, is the same advice as for personal growth.\n ' + this.userInput4 + '$ for school fees, you can apply to government or university scholarships !';
    }
    
    else{
    this.text = 'please put in parameters'
    }


    
    // const apiUrl = 'https://api.openai.com/v1/chat/completions';

    // const inputPrompt = 'Hi chat, I\'m looking to budget my money accordingly, please give me adice and resources as a woman in tech!'
    // + 'here is my budget, ' + this.userInput1 +'for software subscriptions, ' + this.userInput2 + 'for professional growth, ' + this.userInput3 +  'for conferences, and ' + this.userInput4 + 'for school fees.';


    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${apiKey}`
    // });

    // const requestData = {
    //   "model": "gpt-3.5-turbo",
    //   "messages": [{"role": "user", "content": inputPrompt}],
    //   "temperature": 0.7
    // };

    // this.http.post(apiUrl, requestData, { headers })
    //   .subscribe((response: any) => {
    //     this.aiResponse = response;
    //     console.log(this.aiResponse);
    //   });
  }

}
