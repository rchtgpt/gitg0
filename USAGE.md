## Gitg0 Usage

* Before you start working on your project, set up the `.gitgo` file:
    * Run `gtg config`
    * Choose a **commit guideline** for your project: 
    ![commit_guideline_image](https://user-images.githubusercontent.com/44428198/101599597-03ad8500-3a20-11eb-9286-125b570c36ca.png)
    * Choose if you want **emojis**:
    ![emoji_usage_image](https://user-images.githubusercontent.com/44428198/101599916-96e6ba80-3a20-11eb-88e4-d19143793dc8.png)
    * A `.gitgo` file will be generated in your working directory!
  
 * Now, whenever you work on a new feature/issue:
     * Run `gtg start`
     * Either enter your **Github Issue Number**: 
     ![github_issue_number_image](https://user-images.githubusercontent.com/44428198/101600253-0eb4e500-3a21-11eb-8a88-41061d6a850d.png)
     or **manually type** what you're working:
     ![manual_issue_text_image](https://user-images.githubusercontent.com/44428198/101600600-90a50e00-3a21-11eb-9401-43744b3260e1.png)
     * After we fetch your Github Issue title or process your manually entered text, select the **Issue type**:
     ![issue_type_mcq_image](https://user-images.githubusercontent.com/44428198/101600846-e37ec580-3a21-11eb-94b6-6b6ab9ff38c1.png)
   
  * To see suggested Branch Name and Commit Title:
      * Run `gtg display`:
      ![suggested_names_image](https://user-images.githubusercontent.com/44428198/101601370-9fd88b80-3a22-11eb-9232-ce189d7c669c.png)
      * You can also modify the suggested names by simply entering the text:
      ![modifying_suggested_name_image](https://user-images.githubusercontent.com/44428198/101601720-ffcf3200-3a22-11eb-873a-22a88ff7d47f.png)
    
   * To checkout to the suggested Branch Name:
      * Run `gtg checkout`:
      ![checkout_branch_image](https://user-images.githubusercontent.com/44428198/101601994-67857d00-3a23-11eb-9879-709b1e6439d6.png)
     
   * Make relevant changes to your code for your issue.
   
   * To add all changes in the working directory to the staging area (conventional git stuff):
      * Run `git add .`
      * [Optional] Run `git status` to check the state of the working directory:
      ![git_add_and_git_status_image](https://user-images.githubusercontent.com/44428198/101602602-66a11b00-3a24-11eb-8dde-0e83b3d4123c.png)
   
   * To commit changes with the Gitg0's suggested commit message:
      * Run `gtg commit`:
      ![gtg_commit_image](https://user-images.githubusercontent.com/44428198/101602830-b4b61e80-3a24-11eb-8fa7-d8094deb751a.png)
      * [Optional] Run `git log` to ensure that the changes have been commited.
    
   * To push your changes:
      * Run `git push`:
      ![git_push_image](https://user-images.githubusercontent.com/44428198/101603001-eb8c3480-3a24-11eb-8a48-9a583460faeb.png)
   
   * Voila! You're GTG: Good to go.
