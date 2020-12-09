export interface GitGoConf {
    current_issue?: {
        number?: number;
        labels?: string[];
        title?: string;
    }
    commit_guidelines: string[];
    custom_guidelines: boolean;
    selected_commit_type: string;
    emojis: {
        initial_commit: string;
        feature: string;
        ui: string;
        code_quality: string;
        performance: string;
        security: string;
        config: string;
        accessibility: string;
        dev_tools: string;
        docs: string;
        release: string;
        bug_fix: string;
        crash: string;
        cleanup: string;
        wip: string;
    }
    existing_branches: string[];
    current_branch: string;
    current_commit_message: string;
    use_emojis: boolean;
    commit_config: boolean;
}
