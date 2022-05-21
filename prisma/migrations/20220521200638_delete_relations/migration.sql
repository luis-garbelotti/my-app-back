-- DropForeignKey
ALTER TABLE "briefings" DROP CONSTRAINT "briefings_projectId_fkey";

-- DropForeignKey
ALTER TABLE "clientsUsers" DROP CONSTRAINT "clientsUsers_clientId_fkey";

-- DropForeignKey
ALTER TABLE "clientsUsers" DROP CONSTRAINT "clientsUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_clientId_fkey";

-- DropForeignKey
ALTER TABLE "projectsUsers" DROP CONSTRAINT "projectsUsers_projectId_fkey";

-- DropForeignKey
ALTER TABLE "projectsUsers" DROP CONSTRAINT "projectsUsers_userId_fkey";

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectsUsers" ADD CONSTRAINT "projectsUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectsUsers" ADD CONSTRAINT "projectsUsers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientsUsers" ADD CONSTRAINT "clientsUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientsUsers" ADD CONSTRAINT "clientsUsers_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "briefings" ADD CONSTRAINT "briefings_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
