import { Account, Client, ID } from "appwrite";
import conf from '../conf/conf';

class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) { 
        try {
            const user = await this.account.create(ID.unique(), email, password, name)
            if (user) {
                this.account.updateName(name);
                return this.login({ email, password });
            }
            
        } catch (error) {
            console.log(`error::authService::createAccount::${error}`);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(`error::authService::login::${error}`);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`error::authService::getCurrentUser::${error}`);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(`error::authService::logout::${error}`);
            throw error;
        }
    }

}

const authService = new AuthService();
export default authService;